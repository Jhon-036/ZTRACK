import express from 'express'
import { CreateUser, LoginUser } from '../controllers/users.controllers.js'
import { CreateStudent, DeleteStudents, ListStudents, UpdateStudent } from '../controllers/studens.controllers.js'

const router = express.Router()

router.post('/auth/register', CreateUser)
router.post('/auth/login', LoginUser)
router.post('/students', CreateStudent)
router.get('/students', ListStudents)
router.put('/students/:id', UpdateStudent)
router.delete('/students/:id', DeleteStudents)

export default router