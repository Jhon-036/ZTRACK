import { isValidObjectId } from "mongoose"
import Exams from "../schemas/exams.schema.js"

export const CreateExam = async (req, res) => {
  try {
    const { clas, note, studentId } = req.body
    if (!clas || !note || !studentId ) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' })
    }

    const existingExam = await Exams.findOne({ clas, studentId })
    if (existingExam) {
      return res.status(400).json({ error: 'El examen ya está registrado al alumno' })
    }

    const exam = await Exams.create({
      clas,
      note,
      studentId
    })

    res.status(201).json({ mensaje: 'Examen registrado exitosamente' })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const ListExams = async (req, res) => {
  try {
    const examsAll = await Exams.find().populate('studentId', 'name lastname age gender')
    if (examsAll.length === 0) {
      return res.status(404).json('No se encontraron examenes registrados')
    }

    const countExams = examsAll.length

    res.status(200).json({cantidad: countExams, examenes: examsAll})

  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const ListExamByStudent = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({ error : 'ID de estudiante es requerido'})
    }
    
    const examsByStudent = await Exams.find({ studentId: id }).populate('studentId', 'name lastname age gender') 
    if (examsByStudent.length === 0) {
      return res.status(404).json({error : 'No se encontraron alumnos registrados'})
    }

    const countExamByStudent = examsByStudent.length

    res.status(200).json({cantidad: countExamByStudent, exameness: examsByStudent})
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}