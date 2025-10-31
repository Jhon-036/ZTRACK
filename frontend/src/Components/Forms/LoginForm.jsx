import { Link } from "react-router-dom"

const LoginForm = () => {
  return (
    <section className="bg-[#18294A] text-white p-12 rounded shadow w-130">
      <h2 className="text-center text-2xl uppercase pb-6">Iniciar Sesión</h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username"  className="outline-0 border-b border-[#f8f8f850] transition p-1 focus:border-b-2 focus:border-white" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Contraseña</label>
          <input type="text" id="password"  className="outline-0 border-b border-[#f8f8f850] transition p-1 focus:border-b-2 focus:border-white" />
        </div>
        <div className="text-center flex flex-col gap-6 mt-4">
          <input type="submit" value={'Ingresar'} className="cursor-pointer bg-white text-[#18294A] font-semibold self-center px-8 py-3 rounded"/>
          <div className="text-xs">
            <p className="font-light">¿No tienes una cuenta?<Link to={'/register'} className="pl-1 underline">Registrar</Link></p>
          </div>
        </div>
      </form>
    </section>
  )
}
export default LoginForm