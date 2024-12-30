import express from "express"
import config from "config"
import mongoose from "mongoose"
import userModel from "../../models/Users/Users.js";


const router = express.Router()

router.get("/getall",async(req,res)=>{
    try {
        let getAll = await userModel.find({})

        res.status(200).json({msg:"Get all the users"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.get("/getone/:id",async(req,res)=>{
    try {
        let paramId = req.params.id;
        let getOne = await userModel.findOne({_id: paramId})

        res.status(200).json({msg:getOne})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.put("/updateuser/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        let userData = req.body;
        await userModel.updateOne({_id:userId},{$set:userData})
        res.status(200).json({msg:"user updated successfully"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})


router.delete("/deleteoneuser/:id",async(req,res)=>{
    try {
        let userId = req.params.id;
        await userModel.deleteOne({_id:userId})
        res.status(200).json({msg:"user is deleted"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

router.delete("/deletealluser",async(req,res)=>{
    try {
        let userData = await userModel.deleteMany({})
        res.status(200).json({msg: "All the Users are deleted"})

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

export default router