const login=require('./login')
const {create}=require('./create')
const {post_password,get_password}=require("./forget_pass")
const deleter=require('./delete')
const verif=require('./verification')


module.exports={
    login,
    create,
    post_password,
    get_password,
    deleter,
    verif
}