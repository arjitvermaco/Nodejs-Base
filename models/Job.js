import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true,'Please provice company name'],
        maxLength:50
    },
    postion:{
        type:String,
        required:[true,'Please provide postion'],
        maxLength:100
    },
    status:{
        type:String,
        enum:['interview','declined','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true,'Please provide user']
    }
},{timestamps:true})

const Jobs = mongoose.model('Jobs', JobSchema)
export default Jobs