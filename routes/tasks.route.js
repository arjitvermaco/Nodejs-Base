import express from 'express'
import { createTask,deleteTask,getAllTasks, updateTask } from '../controllers/tasks.js'
const router = express.Router()


router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).patch(updateTask)

export default router
