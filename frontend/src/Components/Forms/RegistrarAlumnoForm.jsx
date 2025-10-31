import { useState } from "react"

const RegistrarAlumnoForm = ({className}) => {
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
  

  const dataForm = (e) => {
    e.preventDefault()


    const RegisterStudent = async () => {
      try {
        const response =  await fetch('http://localhost:3000/v1/api/students', {
          method: 'POST',
          body: {dataStudent}
        })
      } catch (err) {
        console.log(err)
      }
    }
    RegisterStudent()
  }

  return (
    <section className={`${className} border border-[#18294A] p-12 rounded shadow w-130`}>
      <h2 className="text-center text-2xl uppercase pb-6">Registrar Alumno</h2>
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
            type="text" 
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
          <input type="submit" value={'Registrar'} className="cursor-pointer bg-[#18294A] text-white font-semibold self-center px-8 py-3 rounded"/>
        </div>
      </form>
    </section>
  )
}
export default RegistrarAlumnoForm