import express from "express";
import {  createPerson, createPersonPostman, deletePerson,  getPeople,  updatePerson } from "./app/controllers.js";
const router = express.Router()

// router.get('/',getPerson)
// router.post('/',addPeople);
// router.delete('/api/people/:id',deleteUser)


router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

export default router