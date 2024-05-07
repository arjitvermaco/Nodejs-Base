import Task from '../models/Task.js'

const getAllTasks = async(req,res)=>{
    const tasks = await Task.find()
    res.status(200).json({tasks})
}

const createTask = async(req,res)=>{
    const task = await Task.create(req.body)
    res.status(200).json({task})
}

const deleteTask = async(req,res)=>{
    const {id} = req.params;
    const task = await Task.findByIdAndDelete(id)
    if(!task){
        res.status(404).json("Task Not found")
    }
    res.status(200).json({task})
}

const updateTask = async(req,res)=>{
    const {id} = req.params;
    const task = await Task.findByIdAndUpdate(id,req.body)
    if(!task){
        res.status(404).json("Task Not found")
    }
    res.status(200).json({task})

}


export {getAllTasks,createTask,deleteTask,updateTask}