// require 
const express=require("express")
const app=express()
const applicationStarup=require('./startup/startup')


app.use('/css',express.static(__dirname +'/css'));

applicationStarup(app)

//server 
app.listen(3000)