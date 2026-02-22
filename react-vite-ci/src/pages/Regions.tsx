import Navigation from '../navigation/Navigation'

const regionsStyles = {
  main: {
    
  }
}

const Regions: React.FC = () => {

  return (
    <>
      <Navigation />
      <main style={regionsStyles.main}>
        <p>regions</p>
      </main>
    </>
  )
}

export default Regions