const {v4:uuidv4}=require("uuid");
const users=[
    {
        id:uuidv4(),
        username:"Zubair",
        email:"zuabir@gmail.com"
    },
    {
        id:uuidv4(),
        username:"Al MAmun",
        email:"almamun@gmail.com"
    },
]

module.exports=users