const {like_post,find_post,verif_user,verif_like_post}=require("../data/database")
const path =require("path")

const likes=(req,res)=>{
    const id_post =req.query.id
    const mail=req.query.mail
    const user=verif_user(mail)
    user.then((result)=>{
        if(result.rowCount!=0){
            const post=find_post(id_post)
            post.then((temp)=>{
                if(temp.rowCount===0){
                    res.send("<p>Cette Post n'existe pas </p>")
                    return false 
                }
                const verif_like=verif_like_post(id_post,mail)
                verif_like.then((result2)=>{
                    if(result2.rowCount ==0){
                        like_post(mail,id_post)
                        res.send("<p>Vous avez aime cette post</p>")
                    }else{
                        res.send('<p>Vous avez deja aime cetta post </p>')
                    }
                })
            })
        }else{
            res.render('error.html',{msg:"Cette mail ne pas trouver "})
        }
        
        
    })
}
module.exports=likes

