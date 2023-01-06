const path=require('path')
const mailsender=require('./mail_sender')
const {insert_user,verif_user}=require('../data/database');
function code(){
    return Math.floor(Math.random() * 100000)
}
let k=code();
const create=async (req,res)=>{
    const {name,mail,password}=req.body
    let VerifyUser=await verif_user(mail)
    if(VerifyUser.rowCount!=0){
        res.render("../Views/error.html",{msg:'Cette Mail deja existe !'})
        return false 
    }
    await insert_user(name,mail,password)
    mailsender(mail,k)
    res.status(200).send("<p>Ajout avec succes ! </p>")
}

module.exports={
    create,
    k
}