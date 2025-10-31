const Button = ({text, className, handleIsShow}) => {
  return (
    <button onClick={handleIsShow} className={`${className} px-6 py-2 border-2 text-sm cursor-pointer rounded`}>{text}</button>
  )
}
export default Button