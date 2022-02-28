const mongoose = require("mongoose");
const { Schema } = mongoose;
const data_value = new Schema([
  {
    username: { type: "string", unique: true },
    password: "string",
    confpass: "string",
    email: { type: "string", unique: true },
    firstname: "string",
    lastname: "string",
  },
]);
const datavalue = mongoose.model("dbData", data_value);
module.exports = datavalue;
