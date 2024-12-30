import express from "express"
import config from "config"
import mongoose from "mongoose"
import videoModel from "../../models/Videos/Videos.js"

const router = express.Router()

router.get("/getall",async(req,res)=>{
    try {
        let getAll = await videoModel.find({})

        res.status(200).json({msg:"Get all the videos"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.get("/getone/:id",async(req,res)=>{
    try {
        let paramId = req.params.id;
        let getOne = await videoModel.findOne({_id: paramId})

        res.status(200).json({msg:getOne})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.put("/update/:id",async(req,res)=>{
    try {
        let videoId = req.params.id;
        let videoData = req.body;
        await videoModel.updateOne({_id:videoId},{$set:videoData})
        res.status(200).json({msg:"video updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/delete/:id",async(req,res)=>{
    try {
        let videoId = req.params.id;
        await videoModel.deleteOne({_id:videoId})
        res.status(200).json({msg:"video is deleted sucessfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deleteall",async(req,res)=>{
    try {
        let videoData = await videoModel.deleteMany({})
        console.log(videoData);
        res.status(200).json({msg:"all the videos are deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router