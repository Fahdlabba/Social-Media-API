const {verif_user,verif_pass,update_user}=require('../data/database')
const path=require('path')
const mail_sender=require("./mail_sender")
const { send } = require('process')
function code(){
    return Math.floor(Math.random() * 100000)
}
let k =0
const get_password=async (req,res)=>{
    const {mail}=req.body
    console.log(mail)
    k=code()
    const user =verif_user(mail)
    user.then(async (temp1)=>{
        if(temp1.rowCount===0){
            res.send("Cette Utilisateur n'existe pas")
            return false
        }
        await mail_sender(mail,k)
        res.send("Code Send !")
    })
}
const post_password=async (req,res)=>{
    const {code,new_password}=req.body
    const mail=req.query.mail
    const user =verif_user(mail)
    user.then((temp1)=>{
        if(temp1.rowCount==0){
            res.send("Cette Utilisateur n'existe pas")
            return false
        }
        if(code!=k){
            res.send("<p> Code Saisie est incorrect ! </p>")
            return false
        }
        const new_pass=update_user(mail,new_password)
        new_pass.then((temp)=>{
            if(temp.rowCount===0){
                res.send("<p>Error svp verifer votre new password</p>")
                return false 
            }
            res.send("<p>Mot de passe change aves succes !")
        })
    })
    
}

module.exports={
    post_password,
    get_password
}
