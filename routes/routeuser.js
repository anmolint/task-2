const router = require("express").Router();
const userController = require("../controller/usersRegister");
const logger = require("../controller/login");
const getdata = require("../controller/getUser");
const deledata = require("../controller/deleteUser");
const returndata = require("../controller/returnData");
const auth = require("../middleware/authUser");
const userAddressdata =require("../controller/userAdresscreate")
router.post("/register", userController.register);
router.post("/login", logger.logIn);
router.get("/userget/", auth, getdata.giveData);
router.put("/userdelete/", auth, deledata.delData);
router.get("/list/", auth, returndata.dataReturn);
router.post("/user/address", auth, userAddressdata.addressCreate)
module.exports = router;
