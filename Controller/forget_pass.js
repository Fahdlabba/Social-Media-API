const {verif_user,verif_pass,update_user}=require('../data/database')
const path=require('path')
const mail_sender=require("./mail_sender")
const { send } = require('process')
function code(){
    return Math.floor(Math.random() * 100000)
}
let CodeSend =0
const GetPassword=async (req,res)=>{
    const {UserMail}=req.body
    CodeSend=code()
    const VerifyUser=await verif_user(UserMail)
    if(VerifyUser.rowCount===0){
        res.send("Cette Utilisateur n'existe pas")
        return false 
    }
    await mail_sender(mail,k)
    res.send("Code Send !")
}
const PostPassword=async (req,res)=>{
    const {UserCode,NewPassword}=req.body
    const UserMail=req.query.mail
    if(UserCode!=k){
        res.send("<p> Code Saisie est incorrect ! </p>")
        return false
    }
    await update_user(UserMail,NewPassword)
    res.send("<p>Mot de passe change aves succes !")
    
}

module.exports={
    PostPassword,
    GetPassword
}
