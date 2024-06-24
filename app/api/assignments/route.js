import connectMongodb from "@/app/libs/mongodb";
import Assignment from "@/models/assignment";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
     const {title,description,link,image}=await request.json();
const newAssignment = {
    title,
    description,
    link,
    image
}
     await connectMongodb() 
   const createdAssignment = await Assignment.create(newAssignment) 
   return NextResponse.json({message:"success",data:createdAssignment},{status:200})
    } 
    catch (error) {
        console.log(error)
        return NextResponse.json({message:"failed"},{status:500})
    }
}

export async function GET(request){
    const { method } = request;
    console.log(method)
try {
 await connectMongodb()
 const assignments = await Assignment.find()
 return NextResponse.json({message:"success",data:assignments},{status:200})   
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"success"},{status:200})    
} 
}