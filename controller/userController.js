const data = require("../model/user");
const crypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();
const userAddress = require("../model/useradress");
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
  const logIn = async (req, res) => {
    try {
      let user = await data.findOne({ username: req.body.username });
      if (user) {
        let decryption = await crypt.compare(req.body.password, user.password);
        console.log(decryption);
        if (decryption == true) {
          let token = jwt.sign({ user_id: user._id }, process.env.key, {
            expiresIn: "1h",
          });
          res.send(token);
        }
      } else {
        res.send("Invalid Password");
      }
    } catch (error) {
      console.error(error);
      res.json({
        status: 500,
        message: error.message,
      });
    }
  };
  const giveuserData = async (req, res) => {
    try {
      let decoded = req.user;
      let foundData = await data.findById({ _id: decoded.user_id });
      if (foundData) {
        res.send(foundData);
      } else {
        res.send(404);
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: 500,
        message: error,
      });
    }
  };
  const deluserData = async (req, res) => {
    try {
      let decoded = req.user
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
  const paginateddataReturn = async (req, res) => {
    try {
      const { page = req.query.id, limit = 10 } = req.query;
      const posts = await data
        .find()
        .limit(limit * 1)
        .skip((page - 1) * limit);
  
      const count = await data.countDocuments();
      res.send(count);
      res.json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } catch (err) {
      console.error(err.message);
    }
  };
  const addressCreate = async (req, res) => {
    try {
      let uid = req.user;
  
      let createdadta = await userAddress.create({
        user_id: uid,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        phonenumber: req.body.phonenumber,
        pincode: req.body.pincode,
      });
      
      res.send(createdadta);
    } catch (error) {
      console.log(error);
      res.json({
        status: 0,
        message: error,
      });
    }
  };
  module.exports={register,logIn,giveuserData,deluserData,addressCreate,paginateddataReturn}
  