const { default: async } = require("async");
const data = require('../model/user')
const jwt = require('jsonwebtoken');
const giveData = async(req,res) =>{
    try{
        console.log(req.query)
        let decoded = jwt.verify(req.query.id, 'abcd');
        console.log(decoded);
        let a = await data.findOne({_id:decoded.user_id});
        if(a){
            res.send(a)

        }

    }
    catch(error){
        console.log(error);
        res.json({
            status:500,
            message :error,
        })
}}
module.exports={giveData}/*req.body,req.params,req.query,req.headers*/