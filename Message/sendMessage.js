const { VerifyId ,AddMessage} = require("../data/database");

const SendMessage=(req,res)=>{
    const {ReciverId,MessageConetnt}=req.body;
    const SenderID=req.query.id 
    const VerifyReciverid=VerifyId(ReciverId)
    if(VerifyReciverid.rowCount===0){
        res.render('../Views/error.html',{msg:"Cette person n'existe pas"})
        return false 
    }
    const SendMesaage=AddMessage(SenderID,ReciverId,MessageConetnt)

    if(SendMesaage.rowCount==0){
        res.render("Error")
        return false
    }
     res.send("<p>Message envoyer aves succes!</p>")
}
module.exports=SendMessage