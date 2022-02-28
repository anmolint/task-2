const mongoose = require("mongoose");
main()
  .then(() => {})
  .catch((err) => console.log(err));
async function main() {
  a = await mongoose.connect(
    "mongodb+srv://Anmol:baloni@cluster0.v1fvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  if (a) {
    console.log("sucess");
  }
}
module.exports = main;
