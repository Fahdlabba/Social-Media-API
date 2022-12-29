// require 
const express=require("express")
const app=express()
const path=require('path')
//User_manager
const login=require('./Controller/login')
const {create}=require('./Controller/create')
const {post_password,get_password}=require("./Controller/forget_pass")
const deleter=require('./Controller/delete')
const verif=require('./Controller/verification')
//POST
const add_post=require("./Post/add_post")
const fetch_post=require('./Post/fetch_post')
const like_post=require('./Post/like_post')
const delete_post=require('./post/delete_post')
const unlike_post=require('./post/unlike_post')
const { get } = require("http")
//Data Parser 
app.use(express.json()); 
app.use('/css',express.static(__dirname +'/css'));
app.use(express.urlencoded({extended:true})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
//user 
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/front/login.html'))
})
app.get('/create',(req,res)=>{
    res.sendFile(path.join(__dirname+'/front/sign_up.html'))
})
app.post('/login',login)
app.post('/create',create)
app.get('/forget_pass',get_password)
app.post('/forget_pass',post_password)
app.put('/verif',verif)
app.delete('/delete',deleter)
//post 
app.post('/add_post',add_post)
app.get('/fetch',fetch_post)
app.post('/like',like_post)
app.post('/unlike',unlike_post)
app.delete('/delete_post',delete_post)



//server 
app.listen(3000)