const path=require('path')
const {verif_user,verification}=require("../data/database")
const {code}=require('./create')
const VerifyUser=(req,res)=>{
    const {UserCode}=req.body;
    const UserMail=req.query.mail
    let VerifyUserV=verif_user(UserMail)
    if(VerifyUserV.rowCount===0){
        res.render("../Views/error.html",{msg:"Compte n/'existe pas  !"})
        return false 
    }
    if(UserCode===code){
        verification(UserMail)
        res.status(202).send("Verification avec succes !;")
    }

}

module.exports=VerifyUser