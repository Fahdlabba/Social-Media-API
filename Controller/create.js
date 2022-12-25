const data=require('../data/data')
const found_name=require('./function')
const path=require('path')

const create=(req,res)=>{
    const {name,password}=req.body
    let i=found_name(data,name)
    if(i==-1){
        data.push({name:name,password:password})
        res.status(200).send("<p>Ajout avec succes ! </p>")
    }else{
        res.render("error.html",{msg:'Name est deja exister !'})
    }
}

module.exports=create