const ExamsCard = ({ exam }) => {
  return (
    <div className="border border-[#18294A] rounded p-4 bg-[#f8f8f8f8] flex flex-col gap-4">
      <div>
        <h3 className="font-semibold">Curso :</h3>
        <p>{exam.clas}</p>
      </div>
      <div>
        <h3 className="font-semibold">Alumno :</h3>
        <p>{exam.studentId.name} {exam.studentId.lastname}</p>
      </div>
      <div className="border-b border-t border-[#18294A] py-4">
        <h3 className="font-semibold">Nota :</h3>
        <p>{exam.note}</p>
      </div>
    </div>
  )
}
export default ExamsCard