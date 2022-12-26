const {verif_user,verif_pass,update_user}=require('../data/database')
const path=require('path')


const update=(req,res)=>{
    const {name,mail,password,new_password}=req.body
    const res1=verif_user(name,mail)
    res1.then((result)=>{
        if(result.rowCount!=0){
            let b =verif_pass(mail,password)
            b.then((res2)=>{
                if(res2.rowCount!=0){
                    update_user(mail,new_password)
                    res.status(200).send('<p>Modification de mot de passe avec succes </p>')
                }else{
                    res.status(404).send("<p>Error</p>")
                }
            })
        }else{
            res.render('error.html',{msg:"Cette Compte n existe pas !"})
        }
    })
}

module.exports=update