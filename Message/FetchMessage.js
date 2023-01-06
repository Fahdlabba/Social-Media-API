const { VerifyId,SenderMessageDB,ReciveMessageDB } = require("../data/database")

const UserMessages=(req,res)=>{
    const UserId=req.query.id 
    const VerifyUserId=VerifyId()
    if(VerifyUserId.rowCount==0){
        res.render('../Views/error.html',{msg:"Id n'existe pas "})
        return false 
    }
    const MessagesSend=SenderMessageDB(UserId)
    const MessageRecive=ReciveMessageDB(UserId)
    console.log("Message Send : ")
    for(let i=0;i<MessagesSend.rowCount;i++){
            console.log(MessagesSend.rows[i])
    }
    console.log("Message Recive : ")
    for(let i=0;i<MessageRecive.rowCount;i++){
        console.log(MessageRecive.rows[i])
}
    res.send('<p>Fetch</p>')
}

module.exports={
    UserMessages
}