import mongoose from "mongoose";
import userModel from "../../models/Users/Users.js";
import videoModel from "../../models/Videos/Videos.js";
import sendEmail from  "../../utils/sendEmail.js"
import sendSMS from "../../utils/sendSMS.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


const router = express.Router();

router.post("/register",async(req,res)=>{
    try {
        let {username, email, password, phone} = req.body;
        console.log(username, email,password, phone);

        let checkDublicate = await userModel.findOne({email});

        if(checkDublicate){
            return res.status(401).json({msg:`user already exists`})
        }
        let hashPassword = await bcrypt.hash(password,10);

        let emailToken  = Math.random().toString(36).substring(2);
        let phoneToken  = Math.random().toString(36).substring(2);

        console.log(emailToken, phoneToken);

        const newUser = {
            username,
            email,
            phone,
            password: hashPassword,
            userVerifyToken:{
                email: emailToken,
                phone: phoneToken
            }
        }
        // await userModel.create(newUser);

        // await sendMail({

        // })

    } catch (error) {
        console.log(error);
        res.status(401).json({msg:error})
    }
})
