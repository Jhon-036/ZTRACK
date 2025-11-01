import express from 'express'
import { CreateUser, LoginUser } from '../controllers/users.controllers.js'
import { CreateStudent, DeleteStudents, ListStudents, UpdateStudent } from '../controllers/studens.controllers.js'
import { AuthJwt } from '../middlewares/auth.js'
import { CreateExam, ListExamByStudent, ListExams } from '../controllers/exams.controllers.js'

const router = express.Router()

router.post('/auth/register', CreateUser)
router.post('/auth/login', LoginUser)

router.post('/students', AuthJwt, CreateStudent)
router.get('/students', AuthJwt, ListStudents)
router.put('/students/:id', AuthJwt, UpdateStudent)
router.delete('/students/:id', AuthJwt, DeleteStudents)

router.post('/exams', AuthJwt, CreateExam)
router.get('/exams', AuthJwt, ListExams)
router.get('/exams/:id', AuthJwt, ListExamByStudent)

export default router