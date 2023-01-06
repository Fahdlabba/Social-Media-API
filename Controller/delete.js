const {verif_user,verif_pass,deleter_user}=require('../data/database')
const path=require('path');
const { query } = require('express');


const DeleteUser=async (req,res)=>{
    const {password}=req.body
    const mail =req.query.mail;
    const VerifyUserPassword=await verif_pass(mail,password)
    if(VerifyUserPassword.rowCount===0){
        res.render('../Views/error.html',{msg:"Wrong Password!"})
        return false
    }
    deleter_user(mail)
    res.status(200).send('<p>Compte supprimer avec succes </p>')
}

module.exports=DeleteUser