const router = require("express").Router();
const userControl = require("../controller/userController");
const passport = require('passport')
const auth = require("../middleware/authUser");
router.post("/register", userControl.register);
router.post("/login",passport.authenticate('local', {successRedirect: '/user/success'}), (error, req,res, next)=>{
    try{
        console.log(error,'---------')
        if(error){
            throw new Error(error)
        }
    }catch(err){
        res.status(400).send(err.message)
    }
})
//  userControl.logIn);
router.get("/user/success", (req,res)=>{
    console.log('here')
    res.send(req.user)
})
router.get("/user/failed", (req,res)=>{
    console.log('asdasd')
    res.send("NOPE")
})
router.get("/user/get/", auth, userControl.giveuserData);
router.put("/userdelete/", auth, userControl.deluserData);
router.get("/list/", auth, userControl.paginateddataReturn);
router.post("/user/address", auth, userControl.addressCreate)
module.exports = router;
