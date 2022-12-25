const express=require("express")
const app=express()
const data=require("./data/data")
const get=require("./Controller/index")
const login=require('./Controller/login')
const create=require('./Controller/create')
const update=require("./Controller/update")


app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.get('/',get)

app.get('/login',login)

app.post('/create',create)
app.put('/update',update)
app.listen(3000)