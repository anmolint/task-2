const router = require("express").Router();
const userController = require("../controller/usersRegister");
const logger = require("../controller/login");
const getdata = require("../controller/getUser")
const deledata = require("../controller/deleteUser")
const returndata = require('../controller/returnData')
router.post("/register", userController.register);
router.post("/login", logger.logIn);
router.get("/userget/",getdata.giveData)
router.put("/userdelete/",deledata.delData)
router.get("/list/",returndata.dataReturn)
module.exports = router;
