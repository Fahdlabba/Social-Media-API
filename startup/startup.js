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
    app.post('/user/login',login)
    app.post('/user/create',create)
    app.get('/user/forget_pass',GetPassword)
    app.post('/user/forget_pass',PostPassword)
    app.put('/user/verification',VerifyUser)
    app.delete('/user/delete',DeleteUser)
    //User Post
    app.post('/user/post/add_post',AddPost)
    app.post('/user/post/like',LikePost)
    app.post('/user/post/unlike',UnlikePost)
    app.delete('/user/post/delete_post',DeletePost)
    //User Messages 
    app.post('/user/message/SendMessage',SendMessage)
    app.get('/user/message/UserMesaage',UserMessages)
}
module.exports=application