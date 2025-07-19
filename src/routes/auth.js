const express = require('express')
const authRouter = express.Router()
const { validateSignUpData } = require('../utils/validation')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const getJWT = require("../models/user")



authRouter.post("/signup", async(req, res)=>{
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

authRouter.post("/login", async(req, res) => {
    try{
        const { emailId, password } = req.body
        const user = await User.findOne({
            emailId: emailId
        })
        if(!user){
            throw new Error("Invalid credentials")
        }
        const passwordValid = await user.validatePassword(password)
        if(passwordValid){
            const token = await user.getJWT();
            console.log(token)
            //Create a JWT Token
            res.cookie("token", token, {expires: new Date(Date.now() + 8 * 3600000),})
            //Add the token to cookie and send the response back to the user
            
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


module.exports = authRouter;