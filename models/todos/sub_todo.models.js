import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({
    
  content:{
    type:String,
    required: true
  },
  complete:{
    type:Boolean,
    default:false
  },
  createdBy:{
    type: mongose.Schema.Types.ObjectId,
    ref:"User",
  },
  
} ,{ timestamps:true })

export const subTodo = mongoose.model('SubTodo', subTodoSchema);