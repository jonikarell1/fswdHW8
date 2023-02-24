const express = require ('express')
const pool = require ('./queries')
const router = require ('./router')
const app = express()

pool.connect((err,res)=>{
    console.log(err)
    console.log("connected")
})

app.use("/", router)

app.listen(3000);