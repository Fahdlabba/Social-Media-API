const {delete_post,verif_user,find_post}=require("../data/database")
const path =require("path")

const delete_p=(req,res)=>{
    const id_post =req.query.id
    const mail=req.query.mail
    const user=verif_user(mail)
    user.then((result)=>{
        if(result.rowCount!=0){
            const post=find_post(id_post)
            post.then((result2)=>{
                if(result2.rowCount!=0){
                    delete_post(id_post,mail)
                    res.send('<p> Post Deleted </p>')
                }else{
                    res.send('<p>Post ne pas trouver </p>')
                }
            })
        }else{
            res.render('error.html',{msg:"Cette mail ne pas trouver "})
        }
        
    })
}
module.exports=delete_p

