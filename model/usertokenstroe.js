const mongoose =require("mongoose");
const {Schema} =mongoose;
const tokenauth = new Schema([
    {
        userid:"string",
        access_token :{type:"string",expires:3600}

    }
])
const tokenauthenicate = mongoose.model("tokendata",tokenauth);
module.exports = tokenauthenicate;