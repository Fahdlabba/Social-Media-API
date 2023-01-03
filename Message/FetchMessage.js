const { VerifyId,SenderMessageDB,ReciveMessageDB } = require("../data/database")


const ReciverMessage=(req,res)=>{
    const ReciverId=req.query.id 
    VerifyId(ReciverId).then((temp)=>{
        if(temp.rowCount==0){
            res.render('../Views/error.html',{msg:"Id n'existe pas "})
            return false 
        }
        ReciveMessageDB(ReciverId).then((temp)=>{
            for(let i=0;i<temp.rowCount;i++){
                console.log(temp.rows[i])
            }
            res.send('<p>Fetch</p>')
        })
    })
}

const SenderMessage=(req,res)=>{
    const ReciverId=req.query.id 
    VerifyId(ReciverId).then((temp)=>{
        if(temp.rowCount==0){
            res.render('../Views/error.html',{msg:"Id n'existe pas "})
            return false 
        }
        SenderMessageDB(ReciverId).then((temp)=>{
            for(let i=0;i<temp.rowCount;i++){
                console.log(temp.rows[i])
            }
            res.send('<p>Fetch</p>')
        })
    })
}

module.exports={
    SenderMessage,
    ReciverMessage
}