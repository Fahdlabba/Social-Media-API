const data=require('../data/data')
const found_name=require('./function')
const path=require('path')


const login=(req,res)=>{
    const {name , password}=req.body;
    let i=found_name(data,name)
    if(i!=-1){
        if(data[i].password!=password){
            res.status(404).send("<p>Verifier Votre mot de passe</p>");
        }
        else{
            res.render('welcome.html',{name:name})
        }
    }else{
        res.render("error.html",{msg:"Cette nom n'existe pas"})
    }
    console.log(data)

}

module.exports=login;