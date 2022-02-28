const { default: async } = require("async");
const data = require("../model/user");
const crypt = require("bcrypt");
const register = async (req, res) => {
  try {
    console.log(req.body);
    if (req.body.password != req.body.confpass) {
      console.error;
    }
    let saltRounds = await crypt.genSalt(10);
    console.log(saltRounds);
    let encrypt = await crypt.hashSync(req.body.password, saltRounds);
    console.log(encrypt);
    let w = await data.create({
      username: req.body.username,
      password: encrypt,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    console.log("sucessfully created data");
    res.send({ token: w });
  } catch (error) {
    console.log(error);
    res.json({
      status: 0,
      message: error,
    });
  }
};

module.exports = { register };
