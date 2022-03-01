require('dotenv').config()
const data = require('../model/user')
const crypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const logIn = async(req,res) =>{
    try{
        let user =await data.findOne({username: req.body.username});
        if(user){
        let decryption = await crypt.compare(req.body.password,user.password);
        console.log(decryption);
        if(decryption == true )
        {
            let token = jwt.sign({ user_id: user._id},process.env.key,{expiresIn:'1h'})
             res.send(token)
        }}
        else{
            res.send("Invalid Password");
        }
    }
    catch(error){
        console.error(error);
        res.json({
            status:500,
            message :error.message,
        })
}}
module.exports ={logIn}