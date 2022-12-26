// const data=require('../data/data')

// const path=require('path')


// const update=(req,res)=>{
//     const {name,password,new_password}=req.body
//     let i=found_name(data,name);
//     if(i!=-1){
//         if(data[i].password===password){
//             data[i].password=new_password
//             res.status(200).send("<p>Update Avec Succes !")
//         }else{
//             res.render('error.html',{msg:"Mot de passe incorrect !"})
//         }
//     }
// }
// module.exports=update