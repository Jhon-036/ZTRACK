import { useEffect, useState } from "react"
import Menu from "../Components/Global/Menu"
import { LoaderCircle } from 'lucide-react'
import EstudianteCard from "../Components/Cards/EstudianteCard"
import Button from "../Components/Global/Button"
import RegistrarAlumnoForm from "../Components/Forms/RegistrarAlumnoForm"

const Estudiante = () => {
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState([])
  const [error, setError] = useState(false)
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3000/v1/api/students', {
          method: 'GET'
        })
        const data = await response.json()
        setStudents(data.estudiantes)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }
    fetchStudents()
  }, [])

  if (loading) { return <div><LoaderCircle /></div> }

  const handleIsShow = () => {
    setIsShow(!isShow)
  }

  return (
    <article>
      <Menu />
      <div className="flex flex-col gap-12">
        <section className="flex items-center ">
          <h1 className="text-2xl uppercase">Lista de estudiantes</h1>
          <div className="flex gap-4">
            <Button 
              text={'Registrar'} 
              className={'border-[#008148] bg-[#00814781] font-semibold'}
              handleIsShow={handleIsShow}
            />
            <Button 
              text={'Modificar'} 
              className={'border-[#c6c013] bg-[#c6c01381] font-semibold'}
              // onClick={handle}
            />
            <Button 
              text={'Eliminar'} 
              className={'border-[#ef2917] bg-[#ef291781] font-semibold'}
              // onClick={handle}
            />
          </div>
        </section>
        <section className="grid grid-cols-3 gap-2">
          {
            students.map((student) => (
              <EstudianteCard key={student.id} students={student} />
            ))
          }
        </section>
      </div>

      <RegistrarAlumnoForm className={isShow ? 'block' : 'hidden'}/>
    </article>
  )
}
export default Estudiante