const express=require("express")
const app=express()
const path=require('path')
//
const login=require('./Controller/login')
const create=require('./Controller/create')
const update=require("./Controller/update")
const deleter=require('./Controller/delete')
//Data Parser 
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
})
app.get('/login',login)
app.post('/create',create)
app.put('/update',update)
app.delete('/delete',deleter)

app.listen(3000)