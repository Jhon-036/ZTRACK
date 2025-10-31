import { Link } from "react-router-dom"

const RegisterForm = () => {
  return (
    <section className="bg-[#18294A] text-white p-12 rounded shadow w-130">
      <h2 className="text-center text-2xl uppercase pb-6">Regístrate</h2>
      <form className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username"  className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Correo</label>
          <input type="text" id="email" className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password-1">Contraseña</label>
          <input type="text" id="password-1"  className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password-2">Confirmar contraseña</label>
          <input type="text" id="password-2"  className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="text-center flex flex-col gap-6 mt-4">
          <input type="submit" value={'Registrar'} className="cursor-pointer bg-white text-[#18294A] font-semibold self-center px-8 py-3 rounded"/>
          <div className="text-xs">
            <p className="font-light">¿Ya tienes una cuenta?<Link to={'/'} className="pl-1 underline">Iniciar Sesión</Link></p>
          </div>
        </div>
      </form>
    </section>
  )
}
export default RegisterForm