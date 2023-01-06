const {like_post,find_post,verif_user,verif_like_post}=require("../data/database")
const path =require("path")

const LikePost=async (req,res)=>{
    const PostId =req.query.id
    const UserMail=req.query.mail
    const VerifyPost=await find_post(PostId)
    if(VerifyPost.rowCount===0){
        res.send("<p>Cette Post n'existe pas </p>")
        return false 
    }
    const VerifyLike=await verif_like_post(PostId,UserMail)
    if(VerifyLike.rowCount!=0){
        res.send('<p>Vous avez deja aime cetta post </p>')
        return false 
    }
    like_post(mail,id_post)
    res.send("<p>Vous avez aime cette post</p>")
            
}
module.exports=LikePost

