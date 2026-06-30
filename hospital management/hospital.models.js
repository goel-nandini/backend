import mongoose, { mongo } from "mongoose";

const hospitalSchema= new mongoose.Schema({},{timestamps:true});

export const hospitalRecord = mongoose.model("hospitalRecord", hospitalSchema);
