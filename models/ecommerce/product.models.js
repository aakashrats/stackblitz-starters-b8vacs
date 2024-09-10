import mongoose, { mongo } from "mongoose"

const productschema = new mongoose.Schema({
  description:{
    required: true,
    type:String
  },
  name:{
    required:true,
    type:String
  },
  productImage:{
    type:String
  },
  price:{
    type:Number,
    default:0
  },
  stock:{
    default:0,
    type:Number
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"category",
    reuired:ture,
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
  
},{timestamps:true})