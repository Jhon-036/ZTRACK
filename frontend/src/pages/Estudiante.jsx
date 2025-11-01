import { useEffect, useState } from "react"
import Menu from "../Components/Global/Menu"
import { LoaderCircle, UserRoundPlus } from 'lucide-react'
import EstudianteCard from "../Components/Cards/EstudianteCard"
import Button from "../Components/Global/Button"
import RegistrarAlumnoForm from "../Components/Forms/RegistrarAlumnoForm"
import Container from "../Components/Global/Container"

const Estudiante = () => {
  const [loading, setLoading] = useState(true)
  const [students, setStudents] = useState([])
  const [isShow, setIsShow] = useState(false)
  const [countStudents, setCountStudents] = useState(0)
  const [countShowStudents, setCountShowStudents] = useState(15)

  const token = localStorage.getItem('Token')
  const fetchStudents = async () => {

    try {
      const response = await fetch('http://localhost:3000/v1/api/students', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()
      setStudents(data.estudiantes)
      setCountStudents(data.cantidad)

      if (!response.ok) {
        alert(data.error || data.mensaje)
        localStorage.removeItem('Token')
        return
      }

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchStudents()
  }, [])

  if (!token) {
    window.location.href = '/'
  }

  const handleIsShow = () => {
    setIsShow(true)
  }

  const handleIsNotShow = () => {
    setIsShow(false)
  }

  const handleCountShowStudent = () => {
    setCountShowStudents(countShowStudents + 6)
  }

  const isLimitStudents = countShowStudents < countStudents

  return (
    <article>
      <Menu />
      <Container>
        <div className="flex flex-col gap-12 py-12">
          <section className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl uppercase">Lista de estudiantes</h1>
              <span className="text-xs text-gray-500">Total: {countStudents}</span>
            </div>
            <div className="flex gap-4">
              <Button
                className={'border-[#008148] bg-[#00814781] font-semibold flex items-center gap-2'}
                onClick={handleIsShow}
              >
                <UserRoundPlus size={16} strokeWidth={2.25} /> Agregar
              </Button>
            </div>
          </section>
          {
            loading ?
              <div className="w-full flex justify-center"><LoaderCircle className="animate-spin" size={32} /></div>
              :
              <div>
                <section className="grid grid-cols-3 gap-2">
                  {
                    students.slice(0, countShowStudents).map((student) => (
                      <EstudianteCard key={student.id} students={student} fetchStudents={fetchStudents} />
                    ))
                  }
                </section>
                {
                  isLimitStudents && (
                    <div className="text-center pt-8">
                      <Button onClick={handleCountShowStudent} className={'font-semibold'}>Ver más</Button>
                    </div>
                  )
                }
              </div>
          }
        </div>
      </Container>
      <RegistrarAlumnoForm
        className={isShow ? 'block' : 'hidden'}
        handleIsNotShow={handleIsNotShow}
        fetchStudents={fetchStudents}
      />
    </article>
  )
}
export default Estudiante