import Navigation from '../navigation/Navigation'

const homePageStyles = {
  main: {

  }
}

const Homepage: React.FC = () => {
  return (
    <>
      <Navigation />
      <main style={homePageStyles.main}>
        {/* css grid that can scroll sticky nav bar and map different chart type children array */}
      </main>
    </>
  )
}

export default Homepage
