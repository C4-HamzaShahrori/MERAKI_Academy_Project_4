const doctorModel = require("../database/models/doctor");



const addDoctorToCategory = (req, res) => {
  const { firstName, lastName, age, numberPhone, address, comment ,specialized} = req.body;
  const newDoctor = new doctorModel({
    firstName,
    lastName,
    age,
    numberPhone,
    address,
    comment,
    specialized
  });
  newDoctor
    .save()
    .then((result) => {
      res
        .status(201)
        .json({ success: true, message: `Success add doctor`, doctor: result });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};


const getAllDoctors = (req,res)=>{
    doctorModel.find({}).then((result)=>{
        if (!result[0]){
            res.status(200).json(`No result`)
        }else{res.status(200).json({
            success:true,
            message:`all doctor`,
            result:result
        })}
    }).catch((err)=>{
        res.sendStatus(500)
    })
}


 const getAllDoctorsBySpecialty=(req,res)=>{
     const specialized=req.query.specialized
    doctorModel.find({specialized:specialized}).then((result)=>{
        if(!result[0]){
            res.status(200).json(`No result`)
        }else {res.status(200).json({
            success:true,
            message:`all doctor by specialized `,
            result:result
        })}

    }).catch((err)=>{
        res.sendStatus(500)
    })
 }



module.exports = {
  addDoctorToCategory,
  getAllDoctors,
  getAllDoctorsBySpecialty
};
