import express from 'express'
import dotenv from 'dotenv'
import connectDB from './src/db/db.config.js'
import cors from 'cors'
import router from './src/routes/routes.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
app.use('/v1/api', router)

const PORT = process.env.PORT || 3001
if (!PORT) { console.log('> Puerto no definido') }

const strartServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log('> Servidor abierto en el puerto ', PORT)
    })
  } catch (err) {
    console.error('> Error al abrir el servidor ', err)
  } 
}

strartServer()