import mongoose from "mongoose";

let VideoSchema = new mongoose.Schema({

    videotitle:{
        type:String,
        required: true,
    },
    videolength:{
        type: String,
        required: true,
    },
    videoDec:{
        type: String,
        required: true,
    },
    videoLikes:{
        type: String,
        required: true,
    },
    videoComments:{
        type: String,
        required: true,
    },

})

let videoModel = mongoose.model("videos",VideoSchema,"Videos");

export default videoModel