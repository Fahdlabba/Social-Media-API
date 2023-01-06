const {add_post,verif_user}=require("../data/database")
const path =require("path")

const AddPost=async (req,res)=>{
    const{PostContent}=req.body
    const UserMail=req.query.mail
    const AddPost=await add_post(UserMail,PostContent)
    if(AddPost.rowCount===0){
        res.render('error.html',{msg:'Verifier Votre donnes svp'})
        return false
    }
    res.status(200).send("<p> Post Publiee avec succes</p>")
}
module.exports=AddPost

