const path=require('path')
const create=require('./create')
const {verif_user,verif_pass}=require("../data/database")

const login=(req,res)=>{
    const {mail,password}=req.body;
    let a =verif_user(mail)
    a.then((reslut) => {
        if(reslut.rowCount!=0){
            let b=verif_pass(mail,password)
            b.then((result2)=>{
               if(result2.rowCount==0){
                res.render("front/login.html",{msg:"Verifier Votre mot de passe"});
            }
            else{
                res.render('welcome.html',{name:mail})
            }
            })
        }else{
            res.render("error.html",{msg:"Cette nom invalide !"})
     
    }
})

}

module.exports=login;