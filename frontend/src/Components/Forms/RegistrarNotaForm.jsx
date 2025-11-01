import { useState } from "react"

const RegistrarNotaForm = ({ fetchExamsWithStudent }) => {
  const [students, setStudents] = useState([])
  const [dataExam, setDataExam] = useState({
    clas: '',
    note: '',
    studentId: ''
  })

  const changeDataExam = (e) => {
    setDataExam({
      ...dataExam,
      [e.target.id]: e.target.value
    })
  }

  const token = localStorage.getItem('Token')

  const fetchExam = async () => {
    try {
      const response = await fetch('http://localhost:3000/v1/api/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(dataExam)
      })

      if (!response.ok) {
        return alert(data.error || data.mensaje)
      }

      const data = await response.json()
      setStudents(data.estudiantes)

      alert(data.mensaje)

    } catch (err) {
      console.log(err);
      alert(err.message)
    }
  }
  

  const dataForm = async (e) => {
    e.preventDefault()
    await fetchExam()

    if (fetchExamsWithStudent) {
      fetchExamsWithStudent()
    }
  }
  
  if (!token) {
    window.location.href = '/'
  }
  
  console.log(students);
  return (
    <section className="border border-[#18294A] rounded p-6 bg-[#f8f8f8f8]">
      <h2 className="text-center uppercase pb-6 border-b">Registrar Examen</h2>
      <form className="flex flex-col gap-6 pt-6" onSubmit={dataForm}>
          <div className="flex flex-col gap-2">
            <label htmlFor="clas">Curso :</label>
            <select
              id="clas"
              required
              value={dataExam.clas}
              onChange={changeDataExam}
              className="border border-[#18294A] outline-0 p-1"
              >
              <option>Seleccione un curso</option>
              <option value={'Cálculo I'}>Cálculo I</option>
              <option value={'Cálculo II'}>Cálculo II</option>
              <option value={'Álgebra Lineal'}>Álgebra Lineal</option>
              <option value={'Física General'}>Física General</option>
              <option value={'Ingles I'}>Ingles I</option>
              <option value={'Ingles II'}>Ingles II</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="studentId">Id de Alumno :</label>
            <input
              placeholder="Nombre y apellido"
              type="text"
              value={dataExam.studentId}
              onChange={changeDataExam}
              id="studentId"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="note">Nota :</label>
            <input
              placeholder="De 0 a 20"
              min='0'
              max='20'
              type="number"
              value={dataExam.note}
              onChange={changeDataExam}
              id="note"
              className="outline-0 border-b border-[#18294A] p-1" />
          </div>
          <div className="text-center flex flex-col gap-6 mt-4">
            <input type="submit" value={'Registrar'} className="cursor-pointer border border-[#2274a5] bg-[#2274a581] text-[#2274a5] font-semibold self-center px-8 py-3 rounded" />
          </div>
        </form>
    </section>
  )
}
export default RegistrarNotaForm