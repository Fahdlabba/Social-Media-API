const {add_post,verif_user}=require("../data/database")
const path =require("path")

const post=(req,res)=>{
    const{content}=req.body
    const mail=req.query.mail
    const user=verif_user(mail)
    user.then((result)=>{
        if(result.rowCount!=0){
            const call_back=add_post(mail,content)
            call_back.then((result2)=>{
                if(result2.rowCount!=0 ){
                    res.status(200).send("<p> Post Publiee avec succes</p>")
                }else{
                    res.render('error.html',{msg:'Verifier Votre donnes svp'})
                }
            })
        }else{
            res.render('error.html',{msg:"Cette mail ne pas trouver "})
        }
        
    })
}
module.exports=post

