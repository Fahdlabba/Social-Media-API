const {unlike_post,find_post, verif_like_post}=require("../data/database")
const path =require("path")
const UnlikePost=async (req,res)=>{
    const PostId =req.query.id
    const UserMail=req.query.mail
    const VerifyPost=await find_post(PostId)
    if(VerifyPost.rowCount===0){
        res.send("<p>Cette Post n'existe pas </p>")
        return false 
    }
    const VerifyLike=await verif_like_post(PostId,UserMail)
    if(VerifyLike.rowCount===0){
        res.send('<p>Vous ete meme pas aime cette post </p>')
        return false 
    }
    unlike_post(mail,id_post)
    res.send("<p>Succes </p>")
            
}
module.exports=UnlikePost

