require("dotenv").config();
const data = require("../model/user");
const jwt = require("jsonwebtoken");
const delData = async (req, res) => {
  try {
    let decoded = jwt.verify(req.headers.id, prrocess.env.key);
    let founduser = await data.findOne({ _id: decoded.user_id });
    if (founduser) {
      await data.deleteOne({ _id: decoded.user_id });
      res.send("data deleted");
    } else {
      console.log("data does not exist");
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: 500,
      message: error,
    });
  }
};
module.exports = { delData };
