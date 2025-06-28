const express = require('express');
const {adminAuth, userAuth} = require('./middlewares/auth');


//instance of express server
const app = express()

//Handle Auth Middleware for all GET POST, .... requests
app.use("/admin", adminAuth)

// get login page no need for user to authorize
app.use("/user/login", (req,res)=>{
    res.send("User logged in successfully!")
})

app.get("/user/data", userAuth, (req, res)=>{
    res.send("User Data Sent");
})

app.get("/admin/getAllData", (req, res)=>{
    res.send("All Data Sent")
})

app.delete("/admin/deleteUser", (req, res)=>{
    res.send("Deleted a user")
})
//listening on port
app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...")
});



