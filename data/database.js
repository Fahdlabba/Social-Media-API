const {Client}=require('pg')
require('dotenv').config();
const connection_url=process.env.DATABASE_URL
const insert_user=async(name,mail,password)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    try{  
        await client.connect();

        await client.query('INSERT INTO "person" ("mail","name","password") VALUES($1,$2,$3)',[mail,name,password])
        return true;
    }catch(error){
        console.log(error.stack)
    }finally{
        client.end();
    }
};
const update_user=async(mail,password)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    try{  
        await client.connect();
        await client.query('UPDATE person SET password=$2 WHERE mail=$1 ;',[mail,password])
        return true;
    }catch(error){
        console.log(error.stack)
    }finally{
        client.end();
    }
}
const verif_user=async (mail)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res= client.query("SELECT * FROM person WHERE mail=$1 ",[mail])
    return res
}
const verif_pass=async (mail,password)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res= client.query("SELECT * FROM person WHERE mail=$1 AND password=$2 ",[mail,password])
    return res
}


const deleter_user =async (mail)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res= client.query("DELETE FROM person WHERE mail=$1",[mail])
    return res
}
const verification =async (mail)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res= client.query("UPDATE person set verifier=1 WHERE mail=$1",[mail])
    return res
}
const add_post=async (mail,content)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("INSERT INTO post (mail_user,content) VALUES ($1,$2)",[mail,content])
    return res
}
const fetch_post =async (mail)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("SELECT * FROM post WHERE mail_user =$1",[mail])
    return res
}
const like_post =async (mail,id_post)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("UPDATE post SET likes=likes+1 WHERE mail_user=$1 AND id_post=$2",[mail,id_post])
    return res
}
const unlike_post =async (mail,id_post)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("UPDATE post SET likes=likes-1 WHERE mail_user=$1 AND id_post=$2",[mail,id_post])
    return res
}
const delete_post=async (id,mail)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("DELETE FROM post WHERE mail_user=$1 AND id_post=$2",[mail,id])
    return res
}
const find_post=async (id)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("SELECT * FROM post WHERE id_post =$1",[id])
    return res
}
 module.exports={
    insert_user,
    verif_user,
    verif_pass,
    update_user,
    deleter_user,
    verification,
    add_post,
    fetch_post,
    like_post,
    unlike_post,
    delete_post,
    find_post
 }
