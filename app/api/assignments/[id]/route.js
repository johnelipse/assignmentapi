import connectMongodb from "@/app/libs/mongodb";
import Assignment from "@/models/assignment";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}){
try {
await connectMongodb()
const assignment = await Assignment.findOne({ _id: id });    return NextResponse.json({message:"success",data:assignment},{status:200})
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"success"},{status:500})    
}
}

export async function PUT(request,{params:{id}}){
try {
    const {newTitle:title,newDescription:description,newLink:link,newImage:image}=await request.json();
    const newAssignment = {
        title,
        description,
        link,
        image
    }
await connectMongodb();
const createdAssignment = await Assignment.findByIdAndUpdate(id,newAssignment)
return NextResponse.json({message:"success",data:createdAssignment},{status:200})
} catch (error) {
    console.log(error)
    return NextResponse.json({message:"success"},{status:500})    
}
}

export async function DELETE(request,{params:{id}}){
   try {
    await connectMongodb()
    await Assignment.findByIdAndDelete(id)
    return NextResponse.json({message:"success"},{status:200})
   } catch (error) {
    console.log(error)
    return NextResponse.json({message:"Faileed"},{status:500})  
   }
}