import express from "express"
import config from "config"
import userRouter from "./controllers/users/index.js"
import videoRouter from "./controllers/videos/index.js"


const app = express()

const PORT = config.get("PORT")

app.use(express.json());

app.get("/",(req,res)=>{
    try {
        res.status(200).json({msg:"Hello"})
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
})

app.use("/api/user",userRouter)
app.use("/api/video",videoRouter)

app.listen(PORT,()=>{
    console.log(`Server is Running at PORT number ${PORT}`);
})

