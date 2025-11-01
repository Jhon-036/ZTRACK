import { useEffect, useState } from "react"
import RegistrarNotaForm from "../Components/Forms/RegistrarNotaForm"
import Container from "../Components/Global/Container"
import Menu from "../Components/Global/Menu"
import ExamsCard from "../Components/Cards/ExamsCard"
import { LoaderCircle } from "lucide-react"

const Nota = () => {
  const [exams, setExams] = useState([])
  const [countExams, setCountExams] = useState(0)
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('Token')

  const fetchExamsWithStudent = async () => {
    try {
      const response = await fetch('http://localhost:3000/v1/api/exams', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
      })

      const data = await response.json()
      setCountExams(data.cantidad)
      setExams(data.examenes)

      if (!response.ok) {
        alert(data.error || data.mensaje)
        localStorage.removeItem('Token')
        return
      }

    } catch (err) {
      console.log(err)
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    fetchExamsWithStudent()
  }, [])


  return (
    <article>
      <Menu />
      <Container>
        <div className="grid grid-cols-4 gap-12 py-12">
          <section>
            <h2 className="text-2xl uppercase pb-6">Panel de notas</h2>
            <div>
              <RegistrarNotaForm />
            </div>
          </section>
          <section className="col-span-3">
            <p className="text-2xl uppercase pb-6">Calificaciones registradas</p>
            {
              loading ?
                <div className="w-full flex justify-center"><LoaderCircle className="animate-spin" size={32} /></div>
                :
                <section className="grid grid-cols-3 gap-2 rounded">
                  {
                    exams.map((exam) => (
                      <ExamsCard key={exam.id} exam={exam} />
                    ))
                  }
                </section>
            }
          </section>
        </div>
      </Container>
    </article>
  )
}
export default Nota