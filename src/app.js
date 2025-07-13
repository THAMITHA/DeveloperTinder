const connectDB = require("./config/database")
const express = require('express');
const User = require('./models/user')
const app = express()

app.use(express.json())

app.post("/signup", async(req, res)=>{
    const user = new User(req.body)
    try{
        await user.save()
        res.send("user added successfully!")
    }
    catch(err){
        res.status(400).send("Error saving the user:"+ err.message)
    }
    
})

//get user by email
app.get("/user", async (req, res)=>{
    const userEmail = req.body.emailId;
    try{
        const users = await User.find({emailId: userEmail})
        if(!users){
            res.status(404).send("user not found")
        }
        else{
            res.send(users)
        }
    }
    catch(error){
        res.status(400).send("Something went wrong!")
    }
    
})

app.get("/feed", async(req, res)=>{
    try{
        const users = await User.find({})
        res.send(users)
    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
})

app.get("/users", async(req, res)=>{
    const userEmail = req.body.emailId
    try{
        const users = await User.findOne({userEmail})
        res.send(users)
    }
    catch(err){
        res.status(400).send("Something went wrong")
    }
})

app.delete("/user", async(req, res)=>{
    const userId = req.body.userId;
    try{
        const user = await User.findByIdAndDelete(userId)
        res.send("User deleted successfully!")
    }
    catch(err){
        res.status(400).send("something went wrong!")
    }
})

app.patch("/user/:userId", async(req, res)=>{
        const userId = req.params?.userId;
        const data = req.body;
        try{
            const ALLOWED_UPDATES = [
            "photoUrl", "about", "gender", "age", "skills"
        ]
        
        const isUpdateAllowed = Object.keys(data).every((k)=>
            ALLOWED_UPDATES.includes(k)
        )

        if(!isUpdateAllowed){
            throw new Error("update not allowed")
        }
        if(data?.skills.length > 10){
            throw new Error("skills cannot be more than 10")
        }
        const user = await User.findByIdAndUpdate(userId, data, {returnDocument: "before", runValidators: true,})
        console.log(user)
        res.send("user updated successfully")
    }
    catch(err){
        res.status(400).send("update failed: "+err.message)
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
    console.error("connection cannot be established!")
})








