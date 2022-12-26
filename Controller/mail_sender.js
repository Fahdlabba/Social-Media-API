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
        from:process.env.MAIL_NAME, ,
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
