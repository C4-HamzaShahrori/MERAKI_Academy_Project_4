const userModel = require("../database/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  userModel
    .findOne({ email: req.body.email.toLowerCase() })
    .populate("role", " -_id -__v")
    .then((result) => {
      const SECRET = process.env.SECRET;
      const generateToken = () => {
        const payload = {
          userId: result.id,
          role: result.role,
        };
        const options = {
          expiresIn: "240m",
        };
        return jwt.sign(payload, SECRET, options);
      };
      if (result) {
        bcrypt.compare(
          req.body.password,
          result.password,
          (err, resultCompare) => {
            if (resultCompare == true) {
            return  res.status(200).json({
              userId:result.id,
              role: result.role.role,
                success: true,
                message: `Valid login credentials`,
                token: generateToken(),
              });
            } else if (resultCompare == false) {
             return res.status(403).json({
                success: false,
                message: `The password you have entered is incorrect`,
              });
            }
          }
        );
      } else if (!result)
     return   res
          .status(404)
          .json({ success: false, message: `The email dosen't exist` });
    })
    .catch((err) => {
      res.status(500).json({ success: false, message: `Server Error` });
    });
};

module.exports = { login };
