
const Section = ({ title, children}) => {
  return (
      <section style={{
          padding: '30px 30px', margin: '0 auto',
        width: '600px'
    }}>
          <h2>{title}</h2>
          {children}
    </section>
  )
}

export default Section;
