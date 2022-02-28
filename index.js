const express = require("express");
const netcall = require("./controller/network");
const app = express();
app.use(express.json());
const { application } = require("express");
const router = require("./routes/routeuser");
app.use("/", router) 
  app.listen(3000, () => {
    console.log("server started at 3000");
  });
