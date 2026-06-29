import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type: mongoose.model('SubTodo',subTodoSchema)
    }

},{timestamps:true})

export const subTodo = mongoose.model("subtodo", subTodoSchema)
