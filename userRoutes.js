const express= require("express")

const {home, createUser, getUser, deleteUser}= require("../controllers/userContoller.js")

const router= express.Route();

router.get("/",home)
router.post('/createUser', createUser)
router.get('/getusers', getUser)
router.delete('/deleteuser/:id', deleteUser)
module.exports=router;