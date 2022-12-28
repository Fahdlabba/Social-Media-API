const path=require('path')
const {verif_user,verif_pass,verification}=require("../data/database")
const {code}=require('./create')
const verift=(req,res)=>{
    const {name , password,mail,c}=req.body;
    let a =verif_user(mail)
    a.then((reslut) => {
        if(reslut.rowCount!=0){
            let b=verif_pass(mail,password)
            b.then((result2)=>{
               if(result2.rowCount==0){
                res.render("error.html",{msg:'Verifier Votre mot de passe'});
            }
            else{
                if(c===code){
                    verification(mail)
                    res.status(202).send("Verification avec succes !;")
                }

            }
            })
        }else{
            res.render("error.html",{msg:"Cette nom invalide !"})
        }
    })

}

module.exports=verift;