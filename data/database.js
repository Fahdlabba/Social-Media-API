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
    await client.connect();
    const res=await client.query('UPDATE person SET password=$2 WHERE mail=$1 ;',[mail,password])
    return res 
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
const verif_like_post=async (id_post,mail)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let check=await client.query("SELECT * FROM post_like WHERE id_post=$1 AND id_user=(SELECT id FROM person where mail=$2)",[id_post,mail])
    return check
}
const like_post =async (mail,id_post)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect()
    const res=await client.query("UPDATE post SET likes=likes+1 WHERE mail_user=$1 AND id_post=$2",[mail,id_post])
    await client.query("INSERT INTO post_like (id_post,id_user) VALUES ($1,(SELECT id FROM person where mail=$2))",[id_post,mail])
    return res
}

const unlike_post =async (mail,id_post)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("UPDATE post SET likes=likes-1 WHERE mail_user=$1 AND id_post=$2",[mail,id_post])
    await client.query("DELETE FROM post_like WHERE id_post=$1 AND id_user=(SELECT id from person where mail=$2)",[id_post,mail])
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
const VerifyId=async(id)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("SELECT * FROM person WHERE id =$1",[id])
    return res
}
const AddMessage=async (SenderID,ReciverId,MessageConetnt)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res=await client.query("INSERT INTO message (sender_id,reciver_id,message_content) VALUES ($1,$2,$3)",[SenderID,ReciverId,MessageConetnt])
    return res
}
const ReciveMessageDB=async (ReciverId)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    const res=client.query("SELECT sender_id,message_content FROM message WHERE reciver_id=$1 ",[ReciverId]);
    return res 
}
const SenderMessageDB=async (SenderId)=>{
    const client =new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    const res=client.query("SELECT reciver_id,message_content FROM message WHERE sender_id=$1 ",[SenderId]);
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
    verif_like_post,
    like_post,
    unlike_post,
    delete_post,
    find_post,
    VerifyId,
    AddMessage,
    ReciveMessageDB,
    SenderMessageDB
 }

