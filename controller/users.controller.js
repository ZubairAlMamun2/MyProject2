let users = require("../model/users.model")
const {v4:uuidv4}=require("uuid");
//const { dirname } = require("path");
const path=require("path");


const homeRoute=(req,res)=>{
    res.sendFile(path.join(__dirname+"/../views/index.html"))
}

const getAllUser=(req,res)=>{
    res.status(200).json(users)
}

const addUser=(req,res)=>{
    const newUser={
        id: uuidv4(),
        username: req.body.username,
        email: req.body.email
    }
    users.push(newUser);
    res.status(200).json(users);
}

const updateUser=(req,res)=>{
   const userid=req.params.id
   const{username,email}=req.body;
   users.filter((user)=>
    user.id===userid
   ).map((selectedUser)=>{
        selectedUser.username=username
        selectedUser.email=email
   });
   res.status(200).json(users)
}
const deleteUser=(req,res)=>{
   const userid=req.params.id
   
   users=users.filter((user)=>
    user.id!==userid
   )
   res.status(200).json(users)
}



module.exports={getAllUser,homeRoute,addUser,updateUser,deleteUser}