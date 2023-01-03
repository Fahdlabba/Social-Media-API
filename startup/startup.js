const {like_post,add_post,delete_post,unlike_post,fetch_post}=require('../Post/index')
const {create,login,deleter,verif,get_password,post_password}=require('../Controller/index')

const {ReciverMessage,SenderMessage,SendMessage}=require('../Message/index')
const express=require("express")
const path=require('path')
const { get } = require('http')

const application=(app)=>{
    app.use(express.json()); 
    app.use(express.static(path.join(__dirname,'../Views')))
    app.use(express.urlencoded({extended:true})); 
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.set('views', __dirname);
    app.post('/login',login)
    app.post('/create',create)
    app.get('/forget_pass',get_password)
    app.post('/forget_pass',post_password)
    app.put('/verif',verif)
    app.delete('/delete',deleter)
    app.post('/add_post',add_post)
    app.get('/fetch',fetch_post)
    app.post('/like',like_post)
    app.post('/unlike',unlike_post)
    app.delete('/delete_post',delete_post)
    app.post('/SendMessage',SendMessage)
    app.get('/ReciveMessage',ReciverMessage)
    app.get('/SenderMessage',SenderMessage)
}
module.exports=application