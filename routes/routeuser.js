const router = require("express").Router();
const userController = require("../controller/usersRegister");
const logger = require("../controller/login");
router.post("/register", userController.register);
router.post("/login", logger.logIn);
module.exports = router;
