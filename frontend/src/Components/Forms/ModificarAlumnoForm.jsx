import { X } from "lucide-react"
import { useEffect, useState } from "react"

const ModificarAlumnoForm = ({ className, handleIsNotShow, student, fetchStudents }) => {
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


    if (!dataStudent.name && !dataStudent.lastname && !dataStudent.age && !dataStudent.gender) {
      return alert('No puede dejar todos los campos vacios')
    }

    const dataUpdate = {
      name: dataStudent.name || student.name,
      lastname: dataStudent.lastname || student.lastname,
      age: dataStudent.age || student.age,
      gender: dataStudent.gender || student.gender,
    }

    try {
      const response = await fetch(`http://localhost:3000/v1/api/students/${student.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(dataUpdate)
      })

      const data = await response.json()

      if (!response.ok) {
        return alert(data.error)
      }

      alert('Alumno actualizado correctamente')
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
    <section className={`${className} absolute top-0 left-0 w-full h-screen bg-[#00000041] backdrop-blur-[2px] flex items-center justify-center`}>
      <div className="w-130 border border-[#18294A] p-12 rounded shadow bg-white relative">
        <h2 className="text-center text-[#18294A] font-semibold text-2xl uppercase pb-6">Modificar Alumno</h2>
        <p className="pb-4 text-[#18294A] font-semibold">Alumno Seleccionado:</p>
        <div className="border border-[#18294A] rounded p-4 mb-4">
          <div>
            <p>Nombre: {student.name}</p>
            <p>Apellido: {student.lastname}</p>
            <span>Edad: {student.age}</span>
            <p>Genero: {student.gender}</p>
          </div>
        </div>
        <div
          className="absolute top-5 right-5 p-1 cursor-pointer"
          onClick={handleIsNotShow}
        >
          <X />
        </div>
        <form className="flex flex-col gap-6" onSubmit={dataForm}>
          <p className="text-[#18294A] font-semibold">Datos a modificar:</p>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Nombre :</label>
            <input
              type="text"
              value={dataStudent.name}
              onChange={changeDataStudent}
              id="name"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="lastname">Apellidos :</label>
            <input
              type="text"
              value={dataStudent.lastname}
              onChange={changeDataStudent}
              id="lastname"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="age">Edad :</label>
            <input
              type="number"
              value={dataStudent.age}
              onChange={changeDataStudent}
              id="age"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender">Genero :</label>
            <input
              type="text"
              value={dataStudent.gender}
              onChange={changeDataStudent}
              id="gender"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="text-center flex flex-col gap-6 mt-4">
            <input type="submit" value={'Guardar'} onClick={handleIsNotShow} className="cursor-pointer bg-[#18294A] text-white font-semibold self-center px-8 py-3 rounded" />
          </div>
        </form>
      </div>
    </section>
  )
}
export default ModificarAlumnoForm