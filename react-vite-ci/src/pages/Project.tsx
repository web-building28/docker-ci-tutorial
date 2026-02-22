import Navigation from '../navigation/Navigation'

const projectStyles = {
  main: {
    
  }
}

const Project: React.FC = () => {

  return (
    <>
      <Navigation />
      <main style={projectStyles.main}>
        <p>project</p>
      </main>
    </>
  )
}

export default Project