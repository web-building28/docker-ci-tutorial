import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, /*Legend, LegendPayload, BarShapeProps,*/ Rectangle } from 'recharts';
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import ChatWindow from '../navigation/ChatWindow'
import Trajectory from '../assets/Trajectory.svg'

const trackingStyles = {
  main: {
    
  },
  titleGrid: {
    height: '50px',
    width: '40vw',
    margin: '15px',
    display: 'grid',
    gridTemplateColumns: '20% 80%',
    gridTemplateRows: '100%',
    gap: '5px'
  },
  titleIcon: {
    gridColumnStart: '1',
    gridColumnEnd: '1',
    gridRowStart: '1',
    gridRowEnd: '2'
  },
  title: {
    paddingTop: '10px',
    gridColumnStart: '2',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    fontSize: '26px'
  },
   trackingSummary: {
    marginLeft: '5em',
    marginTop: '2em',
    fontSize: '24px',
    width: '38vw',
    zIndex: '1000'
  },
    barTitle: {
    margin: '3em',
    textAlign: 'center' as const,
    alignItems: 'center',
    fontSize: '28px'
  },
  homeGraph: {
    display: 'flex',
    justifyContent: 'center'
  }
}

type TimelineDataType = {
  name: string;
  type: string;
  outcome: 'success' | 'error' | 'pending';
  Development: [number, number];
  Production: [number, number];
}

const data: Array<TimelineDataType> = [
  {
    name: 'Japan',
    type: 'TR',
    outcome: 'success',
    Development: [1980, 2019],
    Production: [1954, 2026],
  },
  {
    name: 'United Stated of America',
    type: 'MT',
    outcome: 'error',
    Development: [1954, 1991],
    Production: [2019, 2024],
  },
  {
    name: 'Australia',
    type: 'MT',
    outcome: 'success',
    Development: [1954, 1983],
    Production: [1991, 2025],
  },
  {
    name: 'China',
    type: 'MT',
    outcome: 'error',
    Development: [1912, 2019],
    Production: [1976, 2026],
  },
  {
    name: 'India',
    type: 'MT',
    outcome: 'success',
    Development: [1918, 2000],
    Production: [1976, 2026],
  }
]

const getBarColor = (outcome: TimelineDataType['outcome']) => {
  switch (outcome) {
    case 'success':
      return 'blue';
    case 'error':
      return 'red';
    default:
      return 'grey';
  }
}

const CustomFillRectangle = (props: any /*BarShapeProps*/) => {
  const { outcome } = props;
  return <Rectangle {...props} fill={getBarColor(outcome)} />;
}

const ActiveRectangle = (props: any /*BarShapeProps*/) => {
  return <CustomFillRectangle {...props} stroke="orange" strokeWidth={3} />;
}

const Tracking: React.FC = ({ defaultIndex }: { defaultIndex?: number }) => {

  return (
    <>
      <Navigation />
      <main style={trackingStyles.main}>
        <div style={trackingStyles.titleGrid}>
          <div style={trackingStyles.titleIcon}>
            <img
              src={Trajectory}
              alt="Cartoon outline of schedule calendar"
              width='100' height='60'
              />
          </div>
          <div style={trackingStyles.title}>Chronology of Solar Panels</div>
        </div>
        <div style={trackingStyles.trackingSummary}>
          In 1964 NASA, building upon previous inventions dating back to earlier than 1873,
          launched a satellite self-sufficient from solar power. In 1983 Prof. Martin Green of UNSW
          invented technology that is present in more than 90% of solar panels.
          <br/><br/>
          In the 2000's
          Japan's mainstream electronics corporations such as Mitsubishi and their
          peers manufactured a large portion of the solar panels used in residential early adapter
          regions such as Los Angeles. This marketshare tapered off around 2019, when
          manufacturing moved mostly to the USA and China. Now, the top 5 countries
          using residential solar power are United States of America, Japan, China, Australia and India.
          The U.S.A. produced more than 50% of their electricity in their
          grid from solar panels in 2023.
        </div>
        <ChatWindow />
        <div style={trackingStyles.barTitle}>
          Residental Solar Panel Periods of Continued Growth
        </div>
        <div style={trackingStyles.homeGraph}>
          <BarChart
            layout="vertical"
            style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
            responsive
            data={data}
            margin={{ bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <Tooltip shared={false} defaultIndex={defaultIndex} />
            <XAxis 
              type="number"
              domain={[1850, 2050]}
              dataKey="development"
              height={50} 
              label={{ value: 'Fictional data', position: 'insideBottomRight' as const}}
              />
            <YAxis
              type="category" 
              dataKey="name" 
              width="auto"
              label={{
                value: 'Fictional data',
                angle: -90,
                position: 'insideTopLeft' as const,
                textAnchor: 'end',
              }}
            />
            <Bar dataKey="Development" stackId="a" radius={25} shape={CustomFillRectangle} activeBar={ActiveRectangle} />
            <Bar dataKey="Production" stackId="a" radius={25} shape={CustomFillRectangle} activeBar={ActiveRectangle} />
          </BarChart>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Tracking