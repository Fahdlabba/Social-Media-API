const nodemailer=require('nodemailer')
require('dotenv').config()
const sendmail=(name,mail,code)=> {
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.MAIL_NAME,
            pass :process.env.MAIL_PASS
        }
    })
    let mailOptions = {
<<<<<<< HEAD
        from: process.env.MAIL_NAME,
=======
        from:process.env.MAIL_NAME, ,
>>>>>>> da0d83b4b321c8377c3dfca13dba62336ee1550a
        to: mail,
        subject: 'Verification',
        text: 'Welcome '+name+' to our application \n Voici votre code de verification '+code+'\n Developer : Fahd Labba ',
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Email sent : '+info.response)
        }
    })
}


module.exports=sendmail
