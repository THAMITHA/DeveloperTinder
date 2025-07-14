const connectDB = require("./config/database")
const express = require('express');
const User = require('./models/user')
const app = express()
const { validateSignUpData } = require('./utils/validation')
const bcrypt = require('bcrypt')

app.use(express.json())

app.post("/signup", async(req, res)=>{
    try{
        //Validation of data
        validateSignUpData(req)
        const {firstName, lastName, emailId, password} = req.body
        //Encrypt the password
        const passwordHash = await bcrypt.hash(password, 10)
        console.log(passwordHash)
        //creating of new instance of User model
        const user = new User({firstName, lastName, emailId, password: passwordHash})
        await user.save()
        res.send("user added successfully!")
    }
    catch(err){
        res.status(400).send("Error: "+ err.message)
    }
    
})

app.post("/login", async(req, res) => {
    try{
        const { emailId, password } = req.body
        const user = await User.findOne({
            emailId: emailId
        })
        if(!user){
            throw new Error("Invalid credentials")
        }
        const passwordValid = await bcrypt.compare(password, user.password)
        if(passwordValid){
            res.send("login Successful!!!")
        }
        else{
            throw new Error("Invalid credentials")
        }
    }
    catch(err){
        res.status(400).send("Error: "+ err.message)
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








