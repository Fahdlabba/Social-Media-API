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
        await client.query('INSERT INTO "person" ("name","mail","password") VALUES($1,$2,$3)',[name,mail,password])
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
const verif_user=async (name,mail)=>{
    const client=new Client({
        connectionString:connection_url,
        ssl:false
    })
    await client.connect();
    let res= client.query("SELECT * FROM person WHERE name=$1 AND mail=$2 ",[name,mail])
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

 module.exports={
    insert_user,
    verif_user,
    verif_pass,
    update_user,
    deleter_user,
    verification
 }