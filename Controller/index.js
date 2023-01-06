const login=require('./login')
const {create}=require('./create')
const {PostPassword,GetPassword}=require("./forget_pass")
const DeleteUser=require('./delete')
const VerifyUser=require('./verification')


module.exports={
    login,
    create,
    PostPassword,
    GetPassword,
    DeleteUser,
    VerifyUser
}