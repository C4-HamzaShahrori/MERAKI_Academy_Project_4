
const usersModel=require("../database/models/user")



 const createNewUser=(req,res)=>{
     const{firstName, lastName, age, country, email, password, role}=req.body
     const newUser=new usersModel ({
        firstName,
        lastName,
        age,
        country,
        email,
        password,
        role,
     })
     newUser.save().then((result)=>{
         res.status(201).json({success:true,
            message:`Success of the registration process`,
            user:result
        })
     }).catch((err)=>{
        //  console.log(err.kind);
         if(err.keyPattern){
             return res.status(409).json({
                success: false,
                message: `The email already exists`,
             })
         }
         res.status(500).json({
            success: false,
            message: `Server Error`,
            err: err,
          });
     })
 }

 module.exports={
    createNewUser
 }