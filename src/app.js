const express = require('express');


//instance of express server
const app = express()

app.get("/user/:userId/:name/:password", (req, res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send({firstName: "Thamitha", lastName: "Rajput"})
})
//listening on port
app.listen(3000, ()=>{
    console.log("Server is successfully listening on port 3000...")
});



