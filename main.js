// require 
const express=require("express")
const app=express()
const path=require('path')
//User_manager
const login=require('./Controller/login')
const {create}=require('./Controller/create')
const update=require("./Controller/update")
const deleter=require('./Controller/delete')
const verif=require('./Controller/verification')
//POST
const add_post=require("./Post/add_post")
const fetch_post=require('./Post/fetch_post')
const like_post=require('./Post/like_post')
const delete_post=require('./post/delete_post')
const unlike_post=require('./post/unlike_post')
//Data Parser 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})
//user 
app.get('/login',login)
app.post('/create',create)
app.put('/update',update)
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