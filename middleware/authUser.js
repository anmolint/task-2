require("dotenv").config();
const tokenAutenticator = require("../model/usertokenstroe");
// const jwt = require("jsonwebtoken");
const tokenVerification = async (req, res, next) => {
  try {
    const tkn = req.headers.authorization;
    if (!tkn) {
      res.send(" auth token required");
    } else {
      let tokenAutentication = tokenAutenticator.find(
        req.headers.authorization
      );

      if (tokenAutentication) {
        // let decode = jwt.verify(tkn, process.env.key);
        req.user = req.headers.authorization;
      }
    }
    next();
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error,
    });
  }
};
module.exports = tokenVerification;
