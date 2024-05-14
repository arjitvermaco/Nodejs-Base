import express from 'express'
import { createJob, deleteJob, getAllJobs, getJob, updateJob } from '../controllers/jobs.js';
import authenticateMiddleware from '../middlewares/auth.js';
const router = express.Router();

router.route('/').post(authenticateMiddleware,createJob).get(authenticateMiddleware,getAllJobs)
router.route('/:id').get(authenticateMiddleware,getJob).delete(authenticateMiddleware,deleteJob).patch(authenticateMiddleware,updateJob)

export default router