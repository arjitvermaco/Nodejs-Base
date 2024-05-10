import express from 'express'
import { createTask,deleteTask,getAllTasks, updateTask } from '../controllers/tasks.js'
import authenticateMiddleware from '../middlewares/auth.js'
import { login } from '../controllers/user.js'
const router = express.Router()


router.route('/').get(authenticateMiddleware,getAllTasks).post(authenticateMiddleware,createTask)
router.route('/:id').delete(authenticateMiddleware,deleteTask).patch(authenticateMiddleware,updateTask)
router.route('/login').post(login)

export default router
