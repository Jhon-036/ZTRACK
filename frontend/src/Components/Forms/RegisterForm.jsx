import { useState } from "react"
import { Link } from "react-router-dom"

const RegisterForm = () => {
  const [dataRegister, setDataRegister] = useState({
    username: '',
    email: '',
    password1: '',
    password2: ''
  })

  const changeDataRegister = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.id]: e.target.value
    })
  }

  const datRegister = async (e) => {
    e.preventDefault()

    const token = localStorage.getItem('Token')
    if (!token) {
      window.location.href = '/'
    }

    if (dataRegister.password1 !== dataRegister.password2) {
      return alert('Las contraseñas no coinciden')
    }

    if (dataRegister.password1.length <= 6) {
      return alert('La contraseña debe de tener al menos 7 caracteres')
    }

    try {
      const userData = {
        username: dataRegister.username,
        email: dataRegister.email,
        password: dataRegister.password1
      }

      const response = await fetch('http://localhost:3000/v1/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization' : `Bearer ${token}` },
        body: JSON.stringify(userData)
      })

      const data = await response.json()

      if (!response.ok) {
        return alert(data.error || data.mensaje)
      }

      alert(data.mensaje) 
      window.location.href = '/'
      return

    } catch (err) {
      console.log('Error: ',err)
      return alert(err.message)
    }
  }

  return (
    <section className="bg-[#18294A] text-white p-12 rounded shadow w-130">
      <h2 className="text-center text-2xl uppercase pb-6">Regístrate</h2>
      <form className="flex flex-col gap-6" onSubmit={datRegister}>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Usuario</label>
          <input 
            type="text" 
            id="username"  
            value={dataRegister.username}
            onChange={changeDataRegister}
            className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Correo</label>
          <input 
            type="email" 
            id="email" 
            value={dataRegister.email}
            onChange={changeDataRegister}
            className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password-1">Contraseña</label>
          <input 
            type="password" 
            id="password1"  
            value={dataRegister.password1}
            onChange={changeDataRegister}
            className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password-2">Confirmar contraseña</label>
          <input 
            type="password" 
            id="password2"  
            value={dataRegister.password2}
            onChange={changeDataRegister}
            className="outline-0 border-b border-[#f8f8f850] p-1" />
        </div>
        <div className="text-center flex flex-col gap-6 mt-4">
          <input 
            type="submit" value={'Registrar'} className="cursor-pointer bg-white text-[#18294A] font-semibold self-center px-8 py-3 rounded"/>
          <div className="text-xs">
            <p className="font-light">¿Ya tienes una cuenta?<Link to={'/'} className="pl-1 underline">Iniciar Sesión</Link></p>
          </div>
        </div>
      </form>
    </section>
  )
}
export default RegisterForm