import mongoose from "mongoose";


export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI)
        console.log("DB is connnected>>>>>")
    }
    catch(error){
        console.log(error)
    }
}
