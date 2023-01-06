const {delete_post,find_post}=require("../data/database")
const path =require("path")

const DeletePost=async (req,res)=>{
    const PostId =req.query.id
    const UserMail=req.query.mail
    const VerifyPost=await find_post(PostId)
    if(VerifyPost.rowCount==0){
        res.send('<p>Post ne pas trouver </p>')
    }
    delete_post(PostId,UserMail)
    res.send('<p> Post Deleted </p>')
}
module.exports=DeletePost

