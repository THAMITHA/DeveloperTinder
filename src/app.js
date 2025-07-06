const connectDB = require("./config/database")
const express = require('express');
const User = require('./models/user')
const app = express()

app.post("/signup", async(req, res)=>{
    const user = new User({
        firstName: "Bhavani",
        lastName: "Rajput",
        emailId: "bhavani@gmail.com",
        password: "bhavani@123"
    })
    try{
        await user.save()
        res.send("user added successfully!")
    }
    catch(err){
        res.status(400).send("Error saving the user:"+ err.message)
    }
    
})
connectDB()
.then(()=>{
    console.log("connection established successfully!")
    app.listen(3000,()=>{
        console.log("Server is listening on port 3000")
    })
})
.catch(()=>{
    console.err("connection cannot be established!")
})








