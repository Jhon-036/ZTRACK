import RegistrarNotaForm from "../Components/Forms/RegistrarNotaForm"
import Container from "../Components/Global/Container"
import Menu from "../Components/Global/Menu"

const Nota = () => {
  return (
    <article>
      <Menu />
      <Container>
        <div className="py-12">
          <h2 className="text-2xl uppercase pb-6">Gestionar Notar</h2>
          <div className="grid grid-cols-4">
            <RegistrarNotaForm />
            <section className="col-span-3">
              Lista de Notas
            </section>
          </div>
        </div>
      </Container>
    </article>
  )
}
export default Nota