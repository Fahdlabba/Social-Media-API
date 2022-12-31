// require 
const express=require("express")
const app=express()
const path=require('path')
const applicationStarup=require('./startup/startup')
//Data Parser 

app.use(express.json()); 
app.use('/css',express.static(__dirname +'/css'));
app.use(express.static(path.join(__dirname,'Views')))
app.use(express.urlencoded({extended:true})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);


applicationStarup(app)

//server 
app.listen(3000)