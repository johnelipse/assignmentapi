import { Models,Model,Schema, model, models } from "mongoose";

const assignmentSchema = new Schema({
    title:String,
    description:String,
   image:String,
   link:String
    
})

const Assignment = models.Assignment || model("Assignment",assignmentSchema)
export default Assignment;