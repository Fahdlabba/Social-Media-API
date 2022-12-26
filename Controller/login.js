const path=require('path')
const create=require('./create')
const {verif_user,verif_pass}=require("../data/database")

const login=(req,res)=>{
    const {name , password,mail}=req.body;
    let a =verif_user(name,mail)
    a.then((reslut) => {
        if(reslut.rowCount!=0){
            let b=verif_pass(mail,password)
            b.then((result2)=>{
               if(result2.rowCount==0){
                res.status(404).send("<p>Verifier Votre mot de passe</p>");
            }
            else{
                res.render('welcome.html',{name:name})
            }
            })
        }else{
            res.render("error.html",{msg:"Cette nom invalide !"})
     
    }
})

}

module.exports=login;