const data = require("../model/user");
const crypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  try {
    if (req.body.password !== req.body.confpass) {
      console.error;
    }
    let saltRounds = await crypt.genSalt(10);
    let encrypt = await crypt.hashSync(req.body.password, saltRounds);
    let registration = await data.create({
      username: req.body.username,
      password: encrypt,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    });
    console.log(registration)
    let token = jwt.sign({registration: registration._id},process.env.key,{expiresIn:'1h'})
    console.log("sucessfully created data");
    res.send({ token});
  } catch (error) {
    console.log(error);
    res.json({
      status: 0,
      message: error,
    });
  }
};

module.exports = { register };
