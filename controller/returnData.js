const { default: async } = require("async");
const data = require('../model/user')
const dataReturn = async(req,res)=>{
    try{
        console.log(res.query)
        const { page = 1, limit = 10 } = req.query;
        const posts = await data.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
        
      const count = await data.countDocuments();
res.json({
        posts,
        totalPages: Math.ceil(count / limit),
        currentPage: page
    })
}

catch (err) {
    console.error(err.message);
  }}
module.exports ={dataReturn}