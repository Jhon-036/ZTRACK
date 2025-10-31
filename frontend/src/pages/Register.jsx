import RegisterForm from "../Components/Forms/RegisterForm"

const Register = () => {
  return (
    <article className="bg-[url('/images/fondo.webp')] w-full h-screen">
      <div className="flex items-center h-full w-[60%] m-auto justify-evenly gap-12">
        <img src='/images/logo.webp' alt="ztrack" className="w-[600px]"/>
        <RegisterForm />
      </div>
    </article>
  )
}
export default Register