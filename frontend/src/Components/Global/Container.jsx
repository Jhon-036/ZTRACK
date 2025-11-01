const Container = ({children, className}) => {
  return (
    <section className={`2xl:max-w-[1400px] xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl px-4 m-auto ${className}`}>
      {children}
    </section>
  )
}
export default Container