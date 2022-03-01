const data = require('../model/user')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const giveData = async(req,res) =>{
    try{
         let decoded = req.user;
        let foundData = await data.findOne({_id:decoded.user_id});
        console.log(foundData)
        if(foundData){
            res.send(foundData)
        }
        else{res.send('data not found')}
    }
    catch(error){
        console.log(error);
        res.json({
            status:500,
            message :error,
        })
}}
module.exports={giveData}/*req.body,req.params,req.query,req.headers*/