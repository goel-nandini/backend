import mongoose, { mongo } from "mongoose";

const DoctorSchema= new mongoose.Schema({},{timestamps:true});

export const doctorRecord = mongoose.model("doctorRecord", DoctorSchemaSchema);
