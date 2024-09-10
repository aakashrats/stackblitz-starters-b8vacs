import mongoose from "mongoose"
const oderItemSchema = new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }
})
const orderSchema = new  mongoose.Schema({
   orderPrice:{
     type:Number,
     required:true
   },
   customer: {
     type: mongoose.Schema.Types.ObjectId,
     ref:"User"
   },
   orderItems:{
     type:[orderItemSchema]
   
   },
   address:{
     type: String,
     required: true
   },
   status:{
     type:String,
     enum:["PENDING", "CANCELLED","DELIVERED"],
     default: "PENDING"
   }
  
},{timestamps:true})

export const Order = mongoose.model("Order", orderSchema)