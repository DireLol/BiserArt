const nodemailer =require('nodemailer')
class MailService{
    constructor(){
        this.transporter = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        authMethod:process.env.AUTHETICATION,
        secure: false,
        auth:{
            user: process.env.SMTP_MESSAGE_FROM,
            pass: process.env.SMTP_APP_PASSWORD
        }
        })
    }
async sendActivationMail(to,link){
    await this.transporter.sendMail({
        from: process.env.SMTP_MESSAGE_FROM,
        to,
        subject: 'Активация аккаунта на'+ process.env.API_URL,
        text:'',
        html:`
                <div>
                    <h1>Для активации перейдите по ссылке </h1>
                    <a href="${link}">${link}</a>
                </div>
        
             `
    })
}
}
module.exports = new MailService();