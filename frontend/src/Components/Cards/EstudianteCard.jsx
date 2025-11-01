import { Copy, Pencil, Trash } from "lucide-react"
import Button from "../Global/Button"
import { useState } from "react"
import ModificarAlumnoForm from "../Forms/ModificarAlumnoForm"

const EstudianteCard = ({ students, fetchStudents }) => {
  const [isShow, setIsShow] = useState(false)

  const handleIsShow = () => {
    setIsShow(true)
  }

  const handleIsNotShow = () => {
    setIsShow(false)
  }

  const handleClickCopy = (text) => {
    navigator.clipboard.writeText(text)
    alert('Copiado!')
  }

  const token = localStorage.getItem('Token')

  const handleDeleteStudent = async () => {
    try {
      const response = await fetch(`http://localhost:3000/v1/api/students/${students.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
      })

      const data = await response.json()
      alert(data.error || data.mensaje)

      if (!response) {
        return alert(data.error || data.mensaje)
      }

      alert(data.error || data.mensaje)
      if (fetchStudents) {
        fetchStudents()
      }

    } catch (err) {
      console.log('Error: ', err)
      return alert(err.message)
    }
  }

  if (!token) {
    window.location.href = '/'
  }

  return (
    <div className="p-4 border border-[#18294A] rounded bg-[#f8f8f8f8]">
      <div className="flex items-center justify-between">
        <div className="pb-2">
          <h2 className="font-semibold">{students.name} {students.lastname}</h2>
          <div className="flex gap-2 items-center cursor-pointer" onClick={() => handleClickCopy(students.id)}>
            <span className="text-gray-500 text-xs">ID: {students.id}</span>
            <Copy size={14} color="#6a7282"/>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            className={'border-[#2274a5] bg-[#2274a581]'}
            onClick={handleIsShow}
          >
            <Pencil size={16} strokeWidth={2.25} />
          </Button>
          <Button
            className={'border-[#ef2917] bg-[#ef291781]'}
            onClick={handleDeleteStudent}
          >
            <Trash size={16} strokeWidth={2.25} />
          </Button>
        </div>
      </div>
      <span>Edad: {students.age}</span>
      <p>Sexo: {students.gender}</p>

      <ModificarAlumnoForm
        className={isShow ? 'block' : 'hidden'}
        handleIsNotShow={handleIsNotShow}
        student={students}
        fetchStudents={fetchStudents}
      />
    </div>
  )
}
export default EstudianteCard