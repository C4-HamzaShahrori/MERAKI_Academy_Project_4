const usersModel = require("../database/models/user");

const createNewUser = (req, res) => {
  const { firstName, lastName, age, country, email, password, role ,image} = req.body;
  const newUser = new usersModel({
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    role,
    image
  })
  newUser
    .save()
    .then((result) => {
      res
        .status(201)
        .json({
          success: true,
          message: `Success of the registration process`,
          user: result,
        });
    })
    .catch((err) => {
      //  console.log(err.kind);
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server Error`,
        err: err,
      });
    });
};


const getUserById = (req, res) => {
  
const userId = req.params.id;
  console.log(userId);
  usersModel.
  findOne({_id: userId}).populate("role","role permissions -_id")
   
 
    .then((result) => {
      if (!result) {
        console.log("no");
        return res.status(404).json({
          success: false,
          message: `The user not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `The user ${userId} `,
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

module.exports = {
  createNewUser,
  getUserById
};
