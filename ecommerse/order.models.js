import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema({
    productId :{
        types: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required: true
    },
})

const orderSchema = new mongoose.Schema({
    orderprice:{
        type : Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        reef:"User"
    },
    orderItems:{
        types:[orderItemSchema]
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)
