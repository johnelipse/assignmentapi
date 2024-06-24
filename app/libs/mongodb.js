import mongoose from "mongoose"

export default async function connectMongodb(){
    try {
     mongoose.connect(process.env.MONGO_URI) 
     console.log("mongo connected successfully")  
    } catch (error) {
      console.log(error)  
    }
}