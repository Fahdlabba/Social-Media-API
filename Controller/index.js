const express=require("express")
const path=require("path")



const get=(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
}

// const post=(req,res)=> {
//     const {name,password}=req.body;
//     console.log(password)
//     if(indexN(data,name)!=-1){
//         if(indexP(data,password,indexN(data,name))){
//             res.render('welcome.html',{name:name})
//         }else{
//             res.status(404).send("404")
//         }
//     }else{
//         if (indexN(data,name)!=-1){
//             res.status(404).send("<p>Cette nom est déja reserve</p>")
//         }else{
//             data.push({name:name,password:password})
//             res.status(200).send("<p>Ajout aves succes </p>")
//         }
//     }
//     console.log(data)
    
// }

module.exports=get