import Navigation from '../navigation/Navigation'

const trackingStyles = {
  main: {
    
  }
}

const Tracking: React.FC = () => {

  return (
    <>
      <Navigation />
      <main style={trackingStyles.main}>
        <p>tracking</p>
      </main>
    </>
  )
}

export default Tracking