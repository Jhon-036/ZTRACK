import { X } from "lucide-react"
import { useState } from "react"

const RegistrarAlumnoForm = ({ className, handleIsNotShow, fetchStudents }) => {
  const [dataStudent, setDataStudent] = useState({
    name: '',
    lastname: '',
    age: '',
    gender: ''
  })

  const changeDataStudent = (e) => {
    setDataStudent({
      ...dataStudent,
      [e.target.id]: e.target.value
    })
  }

  const token = localStorage.getItem('Token')

  const dataForm = async (e) => {
    e.preventDefault()

    if (!dataStudent.name || !dataStudent.lastname || !dataStudent.age || !dataStudent.gender) {
      return alert('Complete todos los campos')
    }

    if (dataStudent.age <= 12) {
      return alert('La edad debe ser mayor de 12 años')
    }

    try {
      const response = await fetch('http://localhost:3000/v1/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(dataStudent)
      })

      const data = await response.json()

      if (!response.ok) {
        return alert(data.error)
      }

      alert('Alumno registrado correctamente')
      if (fetchStudents) {
        fetchStudents()
      }

    } catch (err) {
      console.log('Error: ', err)
      return alert(err.message)
    } finally {
      handleIsNotShow()
    }

  }

  if (!token) {
    window.location.href = '/'
  }

  return (
    <section className={`${className} sticky top-0 left-0 w-full h-screen bg-[#00000041] backdrop-blur-[2px] flex items-center justify-center`}>
      <div className="w-130 border border-[#18294A] p-12 rounded shadow bg-white relative">
        <h2 className="text-center text-2xl uppercase pb-6">Registrar Alumno</h2>
        <div
          className="absolute top-5 right-5 p-1 cursor-pointer"
          onClick={handleIsNotShow}
        >
          <X />
        </div>
        <form className="flex flex-col gap-6" onSubmit={dataForm}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              value={dataStudent.name}
              onChange={changeDataStudent}
              id="name"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname">Apellidos</label>
            <input
              type="text"
              value={dataStudent.lastname}
              onChange={changeDataStudent}
              id="lastname"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="age">Edad</label>
            <input
              type="number"
              value={dataStudent.age}
              onChange={changeDataStudent}
              id="age"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Genero</label>
            <input
              type="text"
              value={dataStudent.gender}
              onChange={changeDataStudent}
              id="gender"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="text-center flex flex-col gap-6 mt-4">
            <input type="submit" value={'Registrar'} className="cursor-pointer bg-[#18294A] text-white font-semibold self-center px-8 py-3 rounded" />
          </div>
        </form>
      </div>
    </section>
  )
}
export default RegistrarAlumnoForm