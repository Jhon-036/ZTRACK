import { useState } from "react"
import { Link } from "react-router-dom"

const LoginForm = () => {
  const [dataLogin, setDataLogin] = useState({
    username: '',
    password: ''
  })

  const changeDataLogin = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.id]: e.target.value
    })
  }

  const dataForm = async (e) => {
    e.preventDefault()

    if (!dataLogin.username || !dataLogin.password) {
      return alert('Complete los campos en blanco')
    }

    try {
      const response = await fetch('http://localhost:3000/v1/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataLogin)
      })

      const data = await response.json()

      if (!response.ok) {
        alert(data.error)
        return
      }

      localStorage.setItem('Token', data.token)

      alert(data.mensaje)
      window.location.href = '/panel'

    } catch (err) {
      console.log('Error: ',err)
      return alert(err.message)
    }
  }
  

  return (
    <section className="bg-[#18294A] text-white p-12 rounded shadow w-130">
      <h2 className="text-center text-2xl uppercase pb-6">Iniciar Sesión</h2>
      <form className="flex flex-col gap-6" onSubmit={dataForm}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Usuario</label>
          <input 
            type="text" 
            id="username"  
            value={dataLogin.username}
            onChange={changeDataLogin}
            className="outline-0 border-b border-[#f8f8f850] transition p-1 focus:border-b-2 focus:border-white" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Contraseña</label>
          <input 
            type="password" 
            id="password"  
            value={dataLogin.password}
            onChange={changeDataLogin}
            className="outline-0 border-b border-[#f8f8f850] transition p-1 focus:border-b-2 focus:border-white" />
        </div>
        <div className="text-center flex flex-col gap-6 mt-4">
          <input type="submit" value={'Ingresar'} className="cursor-pointer bg-white text-[#18294A] font-semibold self-center px-8 py-3 rounded"/>
          <div className="text-xs">
            <p className="font-light">¿No tienes una cuenta?<Link to={'/registrar'} className="pl-1 underline">Registrar</Link></p>
          </div>
        </div>
      </form>
    </section>
  )
}
export default LoginForm