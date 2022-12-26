const path=require('path')
const mailsender=require('./mail_sender')
const {insert_user,verif_user}=require('../data/database');
const create=(req,res)=>{
    const {name,password,mail}=req.body
    let a=verif_user(name,mail)
    let test=true
    a.then((result)=>{
        test=result.rowCount==0;
        if(test){
            //data.push({name:name,password:password,mail:mail})
            insert_user(name,mail,password)
            res.status(200).send("<p>Ajout avec succes ! </p>")
        }else{
            res.render("error.html",{msg:'Name est deja exister !'})
        }
    })
}

module.exports=create