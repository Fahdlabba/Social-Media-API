const { VerifyId ,AddMessage} = require("../data/database");

const SendMessage=(req,res)=>{
    const {ReciverId,MessageConetnt}=req.body;
    const SenderID=req.query.id 
    VerifyId(ReciverId).then((temp)=>{
        if(temp.rowCount==0){
            res.render('../Views/error.html',{msg:"Cette person n'existe pas"})
            return false 
        }
        AddMessage(SenderID,ReciverId,MessageConetnt).then((temp)=>{
            if(temp.rowCount==0){
                res.render("Error")
                return false
            }
            res.send("<p>Message envoyer aves succes!</p>")
        })
    })
}
module.exports=SendMessage