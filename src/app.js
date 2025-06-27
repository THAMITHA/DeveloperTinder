const express = require('express');


//instance of express server
const app = express();

app.use("/user", (req, res)=>{
    res.send("Hahahahahahahahaa!!!")
})
app.get("/user", (req, res)=>{
    res.send({firstName: "Thamitha", lastName: "Rajput"})
})

app.post("/user",(req, res)=>{
    // Save Data to the database
    res.send("Data successfully save to the database!")
})

app.delete("/user",(req,res)=>{
    res.send("Data deleted successfully!")
})

// app.use("/hello/2", (req, res)=>{
//     res.send("Abracadabra!")
// })

// //this will match all the HTTP method API calls to /hello
// app.use("/hello", (req, res)=>{
//     res.send("Hello Hello Hello")
// })

//request handler
app.use("/test",(req, res)=>{
    res.send("Hello from the server!")
})

// app.use("/", (req, res)=>{
//     res.send("khamaa ghani from thamitha!")
// })

//listening on port
app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...")
});



