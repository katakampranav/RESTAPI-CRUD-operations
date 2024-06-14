import mongoose from "mongoose";
require("dotenv").config();

const connectDB = mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log("DB connected")
})
.catch((e)=>{
    console.log(e)
})

export default connectDB;