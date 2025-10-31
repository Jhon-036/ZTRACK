import { isValidObjectId } from 'mongoose'
import Studens from '../schemas/students.schema.js'

export const CreateStudent = async (req, res) => {
  try {
    const { name, lastname, age, gender } = req.body
    if (!name || !lastname || !age || !gender) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' })
    }

    const existingStudent = await Studens.findOne({ name, lastname })
    if (existingStudent) {
      return res.status(400).json({ error: 'El alumno ya existe' })
    }

    const student = await Studens.create({
      name,
      lastname,
      age,
      gender
    })

    res.status(201).json({ mensaje: 'Alumno creado exitosamente', alumno: student })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const ListStudents = async (req, res) => {
  try {
    const studentsAll = await Studens.find()
    if (studentsAll.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron alumnos registrados' })
    }

    const countStudents = studentsAll.length

    res.status(200).json({cantidad: countStudents, estudiantes: studentsAll})
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const UpdateStudent = async (req, res) => {
  try {
    const { id } = req.params
    const updateData = req.body
    if (!isValidObjectId(id)) {
      return res.status(404).json({ mensaje: 'No se encontraro el ID' })
    }

    const studentUpdate = await Studens.findByIdAndUpdate(
      id,
      {$set: updateData},
      {new: true, runValidators: true}
    )
    if (!studentUpdate) {
      return res.status(404).json({error: 'No se encontro el alumno'})
    }

    res.status(200).json({mensaje: 'Alumno actualizado exitosamente', alumno: studentUpdate})
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const DeleteStudents = async (req, res) => {
  try {
    const { id } = req.params
    if (!isValidObjectId(id)) {
      return res.status(404).json({ mensaje: 'No se encontraro el ID' })
    }

    const studentDelete = await Studens.findByIdAndDelete(id)
    
    res.status(200).json({mensaje: 'Alumno eliminado exitosamente', alumno: studentDelete})
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}