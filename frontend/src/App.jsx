import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Panel from './pages/Panel'
import Register from './pages/Register'
import Estudiante from './pages/Estudiante'
import Nota from './pages/Nota'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/registrar' element={<Register />}/>
        <Route path='/panel' element={<Panel />}/>
        <Route path='/panel/estudiantes' element={<Estudiante />}/>
        <Route path='/panel/notas' element={<Nota />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
