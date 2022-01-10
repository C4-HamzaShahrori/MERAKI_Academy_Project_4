const doctorModel = require("../database/models/doctor");

const addDoctorToCategory = (req, res) => {
  const { firstName, lastName, age, numberPhone, address, comment } = req.body;
  const newDoctor = new doctorModel({
    firstName,
    lastName,
    age,
    numberPhone,
    address,
    comment,
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

module.exports = {
  addDoctorToCategory,
};
