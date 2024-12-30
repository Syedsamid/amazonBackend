import nodemailer from "nodemailer"
import config from "config";

let USER = config.get("USER");
let PASS = config.get("PASS")

async function sendEmail(emailData){
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth:{
                user: USER,
                pass: PASS
            }
        })
        let sender = await transporter.sendMail({
            from :`From ${USER}`,
            to:emailData.to,
            subject:emailData.subject,
            html:emailData.html
        })
        console.log("email send succssfully");
        console.log(sender.messageId);

    } catch (error) {
        console.log(error);
    }
}
// export default sendEmail

let email = {
    to: "suhail@code.in",
    subject:"Hello",
    html: "<h1> hii </h1>"
}
sendEmail(email)