const { default: async } = require("async");
const data = require('../model/user')
const jwt = require('jsonwebtoken');
const delData = async(req,res) =>{
    try{
        console.log(req.headers)
        let decoded = jwt.verify(req.headers.id, 'abcd');
        let a = await data.findOne({_id:decoded.user_id});
        if(a){
            await data.deleteOne({_id:decoded.user_id});
            res.send('data deleted')
        }else{console.log('data does not exist')}
    }
        catch(error){
            console.log(error);
            res.json({
                status:500,
                message :error,
            })
    
}}
module.exports={delData}