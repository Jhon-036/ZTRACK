import { Link } from "react-router-dom"
import Container from "./Container"

const Menu = () => {
  return (
    <header className="bg-[#18294A] shadow">
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-[200px]">
            <Link to={'/panel'}>
              <img src="/images/logo.webp" alt="ztrack"/>
            </Link>
          </div>
          <div>
            <ul className="flex gap-4">
              <Link 
                to={'/panel/estudiantes'} 
                className='text-white px-8 py-6 font-semibold border-b-2 border-transparent transition hover:border-white'
              >Estudiantes</Link>
              <Link 
                to={'/panel/notas'} 
                className='text-white px-8 py-6 font-semibold border-b-2 border-transparent transition hover:border-white'
              >Notas</Link>
            </ul>
          </div>
        </div>
      </Container>
    </header>
  )
}
export default Menu