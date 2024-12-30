import mongoose from "mongoose";

let userSchema = new mongoose.Schema({

    username:{
        type:String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    userVerifyToken:{
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
    }

})

let userModel = mongoose.model("user",userSchema,"User");

export default userModel