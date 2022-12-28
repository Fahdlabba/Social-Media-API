const {fetch_post,verif_user}=require("../data/database")
const path =require("path")

const fetch=(req,res)=>{
    const mail=req.query.mail
    const user=verif_user(mail)
    user.then((result)=>{
        if(result.rowCount!=0){
            const call_back=fetch_post(mail)
            call_back.then((result2)=>{
                for(let i =0;i<result2.rowCount;i++){
                    console.log(result2.rows[i])
                }
                res.send("POST")
            })
        }else{
            res.render('error.html',{msg:"Cette mail ne pas trouver "})
        }
        
    })
}
module.exports=fetch

