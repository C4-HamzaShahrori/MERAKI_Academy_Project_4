const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const authorization = (string) => {
  return (req, res, next) => {
    let token = req.headers.authorization;
    if (typeof token !== "undefined") {
      token = req.headers.authorization.split(" ")[1];
      jwt.verify(token, SECRET, (err, result) => {
        // console.log(result);
        if (result.role.permissions.indexOf(string) >= 0) {
          next();
        } else {
          res.status(403).json({ success: false, message: "Unauthorized" });
        }
      });
    }
  };
};

module.exports = { authorization };
