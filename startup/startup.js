const {like_post,add_post,delete_post,unlike_post,fetch_post}=require('../Post/index')
const {create,login,deleter,verif,get_password,post_password}=require('../Controller/index')


const application=(app)=>{
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
}
module.exports=application