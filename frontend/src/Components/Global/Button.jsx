const Button = ({children, className, onClick}) => {
  return (
    <button onClick={onClick} className={`${className} px-6 py-2 border-2 text-sm cursor-pointer rounded`}>{children}</button>
  )
}
export default Button