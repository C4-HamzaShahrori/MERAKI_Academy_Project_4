const jwt = require("jsonwebtoken");
const loginRouter = require("../routes/login");
const SECRET = process.env.SECRET;

const authentication = (req, res, next) => {
  let token = req.headers.authorization;
  if (typeof token !== "undefined") {
    token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET, (err, result) => {
      if (!result) {
        res
          .status(403)
          .json({ success: false, message: `The token is invalid or expired` });
      } else {
        req.token = result;
        next();
      }
    });
  } else {
    res.status(403).json({ success: false, message: "Forbidden" });
  }
};

module.exports = { authentication };
