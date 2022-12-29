const {unlike_post,fetch_post,verif_user,find_post, verif_like_post}=require("../data/database")
const path =require("path")

const unlike=(req,res)=>{
    const id_post =req.query.id
    const mail=req.query.mail
    const user=verif_user(mail)
    user.then((result)=>{
        if(result.rowCount!=0){
            const post=find_post(id_post)
            post.then((temp)=>{
                if(temp.rowCount===0){
                    res.send("<p>Cette poste n'existe pas </p>")
                    return false
                }
                const verif=verif_like_post(id_post,mail)
                verif.then((temp2)=>{
                    if(temp2.rowCount===0){
                        res.send("<p> Vous ete meme pas aime cette post </p>")
                        return false 
                    }
                    unlike_post(mail,id_post)
                    res.send("<p>Succes </p>")
                })
            })
        }else{
            res.render('error.html',{msg:"Cette mail ne pas trouver "})
        }
        
    })
}
module.exports=unlike

