import Job from "../models/Job.js"


const getAllJobs = async(req,res)=>{
    console.log("User id is",req.userId)
    const jobs = await Job.find({createdBy:req.body.userId}).sort('createdAt')
    res.status(200).json({jobs,count:jobs.length})
}

const createJob = async(req,res)=>{
    // req : {job,userId}
    const job = await Job.create({...req.body,createdBy:req.body.userId})
    res.status(201).json({job})
}

const getJob = async(req,res)=>{
    console.log("Requested Single Job")
    const {userId} = req.body;
    const {id:jobId} = req.params;

    const job = await Job.findOne({
        _id:jobId,
        createdBy:userId
    })

    if(!job){
        res.status(404).json({"message":"Job Not Found"})
    }
    res.status(200).json({job})
}

const deleteJob = async(req,res)=>{
    const {userId} = req.body;
    const {id:jobId} = req.params;

    const job = await Job.findByIdAndDelete({
        _id:jobId,
        createdBy:userId
    })

    if(!job){
        res.status(404).json({"message":"Job not Found"})
    }

    res.status(200).send()
}

const updateJob = async(req,res) =>{
    const {company,position,userId} = req.body;
    const {id:jobId} = req.params;

    if(company === "" || position === ""){
        res.status(404).json({"message":"Company  or Postion fields cannot be empty"})
    }

    const job = await Job.findByIdAndUpdate(
        {_id:jobId,createdBy:userId},
        req.body,
        { new: true, runValidators: true }
    )
    if(!job){
        res.status(400).json({"message":"Job not found"})
    }

    res.status(200).json({job})
}

export {getAllJobs,createJob,getJob,deleteJob,updateJob}