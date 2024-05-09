const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const router = require("./routes/users.route");

const app=express();
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use("/",router);

app.use((req,res,next)=>{
    res.status(404).json({
        message:"routes not found"
    })
})

app.use((err,req,res,next)=>{
    res.status(404).json({
        message:"Something wrong in server"
    })
})


module.exports=app;