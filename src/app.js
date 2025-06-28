const express = require('express');

const app = express()

app.get("/getUserData", (req, res)=>{
    // Logic to handle DB call and get user data
    throw new Error("dfgfdgdfgdfg")
    res.send("User Data Sent")
})

app.use("/",(err, req, res, next)=>{
    if(err){
        res.status(500).send("something went wrong")
    }
    else{
        next()
    }
})

//listening on port
app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...")
});



