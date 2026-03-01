import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend/*, LegendPayload*/ } from 'recharts'
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import ChatWindow from '../navigation/ChatWindow'
import SolarImage from '../assets/SolarImage.png'
import Worldwide from '../assets/Worldwide.svg'
import { useGetDummyListQuery } from '../store/api/getApi'

const homePageStyles = {
  main: {

  },
  homepageTitle: {
    marginLeft: '2em',
    marginTop: '30px',
    fontSize: '64px',
    zIndex: '1000',
    textAlign: 'center' as const
  },
  introGrid: {
    margin: '20px',
    display: 'grid',
    position: 'relative' as const,
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '70%',
    gap: '3em',
    textAlign: 'center' as const,
    width: '100%'
  },
  gridItem1: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '1',
    marginTop: '2em',
    fontSize: '18px',
    width: '38vw',
    textAlign: 'left' as const
  },
    gridItem2: {
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '1',
    backgroundImage: `url(${SolarImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    float: 'right' as const
  },
  barTitle: {
    marginTop: '3em',
    textAlign: 'center' as const,
    alignItems: 'center',
    fontSize: '28px'
  },
  homeGraph: {
    margin: 'auto',
    padding: '3em',
    position: 'relative' as const,
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '70%'
  }
}

const Homepage: React.FC = () => {

  const [focusedDataKey, setFocusedDataKey] = useState<string | null>(null);
  const [locked, setLocked] = useState<boolean>(false);
  
  const { data/*, error, isLoading*/ } = useGetDummyListQuery('users')

  const onLegendMouseEnter = (payload: any /*LegendPayload*/) => {
    if (!locked) {
      setFocusedDataKey(String(payload.dataKey))
    }
  }

  const onLegendMouseOut = () => {
    if (!locked) {
      setFocusedDataKey(null)
    }
  }

  const onLegendClick = (payload: any /*LegendPayload*/) => {
    if (focusedDataKey === String(payload.dataKey)) {
      if (locked) {
        setFocusedDataKey(null)
        setLocked(false)
      } else {
        setLocked(true)
      }
    } else {
      setFocusedDataKey(String(payload.dataKey))
      setLocked(true);
    }
  }

  return (
    <>
      <Navigation />
      <main style={homePageStyles.main}>
        <ChatWindow />
        <div style={homePageStyles.homepageTitle}>Solar Power - Industrial Insights</div>
        <div style={homePageStyles.introGrid}>
          <div style={homePageStyles.gridItem1}>
            The energy supply of society has evolved into a combination of
            what was most easily obtainable with also what sources were
            possible under sprawling political control.
            <br />
            <br />
            While there is an economy behind the energy industry, for instance the
            New York Mercantile Exchange, it balances itself between economic power
            and essential services. Depending on what location and current events
            throughout the world, you may be more towards either end of that spectrum.
            <br />
            <br />
            Energy in the economy is more similar to energy in nature than most believe it is.
            Often, when we hear oil, hydro-power, coal, wind power, nuclear power, and solar power called "energy" we get the feeling of a superficial definition that lacks details in commerce and lacks effort in explaining what is energy. However, the energy sector, albeit less human, is equally dynamic and elusive in regards to the changes in time, source, type, and multitude as the substance of energy in relation to energy versus matter, and also energy as emotions or feelings.
            <br />
            <br />
            <img
              src={Worldwide}
              alt="Cartoon outline of the Earth"
              width='100' height='60'
              />
          </div>
          <div style={homePageStyles.gridItem2} />
        </div>
        <div style={homePageStyles.barTitle}>
          Ratio of Energy Sector Per Source - Global
        </div>
        <div style={homePageStyles.homeGraph}>
          <BarChart
              style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
              responsive
              data={data}
                margin={{
                top: 20,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="address.geo.lat" width="auto" />
            <Tooltip />
            <Legend onMouseEnter={onLegendMouseEnter} onMouseOut={onLegendMouseOut} onClick={onLegendClick} />
            <Bar dataKey="address.geo.lat" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'address.geo.lat' ? '#8884d8' : '#eee'} />
            <Bar dataKey="address.zipcode" stackId="a" fill={focusedDataKey == null || focusedDataKey === 'address.zipcode' ? '#82ca9d' : '#eee'} />
            <Bar dataKey="address.geo.lng" fill={focusedDataKey == null || focusedDataKey === 'address.geo.lng' ? '#ffc658' : '#eee'} />
          </BarChart>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Homepage