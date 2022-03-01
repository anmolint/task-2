const router = require("express").Router();
const userControl = require("../controller/userController");
const auth = require("../middleware/authUser");
router.post("/register", userControl.register);
router.post("/login", userControl.logIn);
router.get("/userget/", auth, userControl.giveuserData);
router.put("/userdelete/", auth, userControl.deluserData);
router.get("/list/", auth, userControl.paginateddataReturn);
router.post("/user/address", auth, userControl.addressCreate)
module.exports = router;
