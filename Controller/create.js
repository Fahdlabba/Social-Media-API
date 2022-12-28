const path=require('path')
const mailsender=require('./mail_sender')
const {insert_user,verif_user}=require('../data/database');
function code(){
    return Math.floor(Math.random() * 100000)
}
let k=code();
const create=(req,res)=>{
    const {name,password,mail}=req.body
    let a=verif_user(mail)
    let test=true
    a.then((result)=>{
        test=result.rowCount==0;
        if(test){
            insert_user(name,mail,password)
            mailsender(name,mail,k)
            res.status(200).send("<p>Ajout avec succes ! </p>")
        }else{
            res.render("error.html",{msg:'Name est deja exister !'})
        }
    })
}

module.exports={
    create,
    k
}