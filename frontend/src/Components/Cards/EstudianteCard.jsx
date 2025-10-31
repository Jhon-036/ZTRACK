const EstudianteCard = ({students}) => {
  return (
    <div className="p-4 border border-[#18294A]">
      <h2 className="font-semibold">{students.name}{students.lastname}</h2>
      <span>Edad: {students.age}</span>
      <p>Sexo: {students.gender}</p>
    </div>
  )
}
export default EstudianteCard