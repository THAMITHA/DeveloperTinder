const connectDB = require("./config/database")
const express = require('express');
const app = express()
const cookieParser = require('cookie-parser')

app.use(express.json())
app.use(cookieParser())

const authRouter = require("./routes/auth")
const profileRouter = require("./routes/profile")
const requestRouter = require("./routes/request")

app.use("/", authRouter)
app.use("/", profileRouter)
app.use("/", requestRouter)

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








