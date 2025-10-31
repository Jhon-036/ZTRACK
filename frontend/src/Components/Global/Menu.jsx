import { Link } from "react-router-dom"

const Menu = () => {

  return (
    <section className="bg-[#18294A]">
      <div className="w-[250px]">
        <Link to={'/panel'}>
          <img src="/images/logo.webp" alt="ztrack" />
        </Link>
      </div>
      <div>
        <ul>
          <Link to={'/panel/estudiantes'} className="bg-white">Estudiantes</Link>
          <Link to={'/panel/notas'} className="bg-white">Notas</Link>
        </ul>
      </div>
    </section>
  )
}
export default Menu