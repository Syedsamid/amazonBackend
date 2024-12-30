import twilio from "twilio";
import config from "config"

let TWLIO_SID = config.get("TWILIO_SID");
let TWLIO_TOKEN = config.get("TWILIO_TOKEN");
let TWLIO_NUMBER = config.get("TWILIO_NUMBER");

let client = new twilio(TWLIO_SID, TWLIO_TOKEN);

async function sendSMS(){
    try {
        await client.messages.create({
            body: "HELLO hii Iam samid come to founder fest to help people",
            to: "+91 8010939480",
            from :TWLIO_NUMBER
        })
    } catch (error) {
        console.log(error);
    }
}
export default sendSMS
