require("dotenv").config();
const tokenAutenticator = require("../model/usertokenstroe");
// const jwt = require("jsonwebtoken");
const tokenVerification = async (req, res, next) => {
  try {
    const tkn = req.headers.id;
    if (!tkn) {
      res.send(" auth token required");
    } else {
      let tokenAutentication = await tokenAutenticator.find({
        access_token: tkn,
      });
      if (!tokenAutentication) {
        
          res.send("Token Expired");
      }
        // let decode = jwt.verify(tkn, process.env.key);
        req.user = tkn;
      }
      next();
    }
   catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error,
    });
  }
};
module.exports = tokenVerification;
