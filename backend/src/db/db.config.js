import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI
  if (!MONGO_URI) { console.log('> No se pudo identidicar el MONGO_URI') }

  try {
    await mongoose.connect(MONGO_URI)
    console.log('> Conectado a la Base de Datos')
  } catch (err) {
    console.log('> Error al conectarse a la Base de Datos ', err)
  }
}

export default connectDB