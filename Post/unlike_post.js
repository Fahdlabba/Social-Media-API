const {unlike_post,fetch_post,verif_user}=require("../data/database")
const path =require("path")

const unlike=(req,res)=>{
    const id_post =req.query.id
    const mail=req.query.mail
    const user=verif_user(mail)
    user.then((result)=>{
        if(result.rowCount!=0){
            const unlike=unlike_post(mail,id_post)
            unlike.then((result2)=>{
                if(result2.rowCount!=0){
                    res.send("<p>Done ! </p>")
                    let post=fetch_post(mail)
                    post.then((f_post)=>{
                        for(let i=0;i<f_post.rowCount;i++){
                            if(f_post.rows[i].id_post==id_post){
                                console.log(f_post.rows[i].content)
                                break
                            }
                        }
                    })
                }else{
                    res.send('<p>Error</p>')
                }
            })
        }else{
            res.render('error.html',{msg:"Cette mail ne pas trouver "})
        }
        
    })
}
module.exports=unlike

