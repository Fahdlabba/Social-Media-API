const {LikePost,AddPost,DeletePost,UnlikePost}=require('../Post/index')
const {create,login,DeleteUser,VerifyUser,GetPassword,PostPassword}=require('../Controller/index')
const {UserMessages,SendMessage}=require('../Message/index')

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
    //User 
    app.post('/login',login)
    app.post('/create',create)
    app.get('/forget_pass',GetPassword)
    app.post('/forget_pass',PostPassword)
    app.put('/verification',VerifyUser)
    app.delete('/delete',DeleteUser)
    //User Post
    app.post('/add_post',AddPost)
    app.post('/like',LikePost)
    app.post('/unlike',UnlikePost)
    app.delete('/delete_post',DeletePost)
    //User Messages 
    app.post('/SendMessage',SendMessage)
    app.get('/UserMesaage',UserMessages)
}
module.exports=application