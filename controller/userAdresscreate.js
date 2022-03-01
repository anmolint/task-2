require("dotenv").config();
const data =require("../model/useradress")
const jwt = require("jsonwebtoken");
const addressCreate=async(req,res)=>{
    try{
        // let tkn =req.headers.authorization;
        // let decodedToken=await jwt.verify(tkn, process.env.key);
       let createdadta= await  data.create({
           address:req.body.address,
           city :req.body.city,
           state :req.body.state,
           phonenumber:req.body.phonenumber,
           pincode:req.body.pincode,
       })
       let encodeToken= jwt.sign({address:createdadta._id},process.env.key,{expiresIn:"1h"});
       res.send(encodeToken)

    }catch (error) {
        console.log(error);
        res.json({
          status: 0,
          message: error,
        });
      }
}
module.exports={addressCreate}