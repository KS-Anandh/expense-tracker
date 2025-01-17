import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoute from './routes/user.route.js'
import dataRoute from './routes/data.route.js'
const app=express()
app.use(cors())
app.use(express.json())
app.use("/user",userRoute)
app.use('/data',dataRoute)

app.get("/",(req,res)=>{
    res.send("Server is Running")
})

mongoose.connect("mongodb+srv://anandh:Nandha1432@cluster0.rusij.mongodb.net/expense-tracker?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("database connected...")
    app.listen(9700,()=>{
        console.log("server is running on 9700")
    })
})
.catch(()=>{
    console.log(err)
})

