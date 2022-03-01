require('dotenv').config()
const jwt = require('jsonwebtoken');
const tokenVerification = async(req,res,next) =>{
    try{
        const tkn = req.headers.authorization;
        let decode = jwt.verify(tkn, process.env.key);
        req.user= decode;
        next()
    }

    catch(error){
        console.log(error);
        res.json({
            status:500,
            message :error,
        })

}}
module.exports=tokenVerification

