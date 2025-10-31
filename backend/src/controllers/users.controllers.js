import jwt from 'jsonwebtoken'
import User from "../schemas/users.schema.js";

export const CreateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' })
    }

    const existingEmail = await User.findOne({ email })
    if (existingEmail) {
      return res.status(400).json({ error: 'El email ya esta registrado' })
    }

    if (password.length <= 6) {
      return res.status(400).json({ error: 'La contraseña debe de tener al menos 7 caracteres' })
    }

    const user = await User.create({
      username,
      email,
      password
    })

    res.status(201).json({ mensaje: 'Usuario registrado exitosamente', user })

  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export const LoginUser = async (req, res) => {
  try {
    const { username, password } = req.body
    if (!username || !password) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' })
    }

    const existingUsername = await User.findOne({ username })
    if (!existingUsername) {
      return res.status(400).json({ error: 'El usuario no existe' })
    }

    const existingPassword = await existingUsername.comparePassword(password)
    if (!existingPassword) {
      return res.status(400).json({ error: 'Contraseña incorrecta' })
    }

    const token = jwt.sign(
      { id: existingUsername._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    )

    res.status(201).json({ mensaje: 'Usuario logeado exitosamente', token, user: existingUsername })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}