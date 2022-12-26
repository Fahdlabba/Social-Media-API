const {verif_user,verif_pass,deleter_user}=require('../data/database')
const path=require('path')


const deleter=(req,res)=>{
    const {name,mail,password}=req.body
    const res1=verif_user(name,mail)
    res1.then((result)=>{
        if(result.rowCount!=0){
            let b =verif_pass(mail,password)
            b.then((res2)=>{
                if(res2.rowCount!=0){
                    deleter_user(mail)
                    res.status(200).send('<p>Compte supprimer avec succes </p>')
                }else{
                    res.status(404).send("<p>Error</p>")
                }
            })
        }else{
            res.render('error.html',{msg:"Cette Compte n existe pas !"})
        }
    })
}

module.exports=deleter