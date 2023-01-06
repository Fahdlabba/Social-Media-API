const path=require('path')
const create=require('./create')
const {verif_user,verif_pass}=require("../data/database")

const login=async(req,res)=>{
    const {mail,password}=req.body;
    const VerifyUser=await verif_user(mail)
    if(VerifyUser.rowCount===0){
        res.render("../Views/index.html",{msg:"Cette nom invalide !"})
        return false;
    }
    const VerifyUserPassword=await verif_pass(mail,password)
    if(VerifyUserPassword.rowCount===0){
        res.render("../Views/index.html",{msg:"Verifier Votre mot de passe"});
        return false 
    }
    res.render('../Views/welcome.html',{name:mail})

}
module.exports=login;