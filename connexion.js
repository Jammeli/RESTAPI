const express=require("express")
const mongoose = require("mongoose")
const app=express()
app.use(express.json())
require('dotenv').config()
const PORT=process.env.PORT
const MONGO_URI=process.env.MONGO_URI
console.log (PORT)
console.log (MONGO_URI)
app.listen(PORT,(err)=>  {if  (err) { throw (err)  } else  console.log(`server running ${PORT}`)})
mongoose.connect(MONGO_URI,(err)=>{if (err) { throw console.log(err) }else console.log("base de donnée connectée")})
