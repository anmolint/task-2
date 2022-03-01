const { default: async } = require("async");
const data = require('../model/user')
const dataReturn = async(req,res)=>{
    try{
        console.log(req.query)
        const { page = req.query.id, limit = 10 } = req.query;
        const posts = await data.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
        
      const count = await data.countDocuments();
      res.send(count,posts)
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