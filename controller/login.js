const { default: async } = require("async");
const data = require('../model/user')
const crypt = require("bcrypt");
const logIn = async(req,res) =>{
    try{
        console.log(req.body);
        let user =await data.findOne({username: req.body.username});
        if(user){
        let decryption = await crypt.compare(req.body.password,user.password);
        if(decryption == true )
        {
            res.send(user._id)
        }}
        else{
            res.send("Invalid Password");
        }
    }
    catch(error){
        console.error();
        res.json({
            status:500,
            message :error,
        })
}}
module.exports ={logIn}