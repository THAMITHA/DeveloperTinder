const express = require('express');


//instance of express server
const app = express();

app.use("/", (req, res)=>{
    res.send("khamaa ghani from thamitha!")
})

app.use("/hello", (req, res)=>{
    res.send("Hello Hello Hello")
})

//request handler
app.use("/test",(req, res)=>{
    res.send("Hello from the server!")
})


//listening on port
app.listen(7777, ()=>{
    console.log("Server is successfully listening on port 3000...")
});



