const { getAllUser, homeRoute, addUser, updateUser, deleteUser } = require("../controller/users.controller");
const express=require("express")
const router=express.Router()


router.get("",homeRoute)
router.get("/users",getAllUser)
router.post("/users",addUser)
router.put("/users/:id",updateUser)
router.delete("/users/:id",deleteUser)

module.exports=router