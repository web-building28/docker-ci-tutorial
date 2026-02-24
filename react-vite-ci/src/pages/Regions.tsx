import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import Navigation from '../navigation/Navigation'
import Footer from '../navigation/Footer'
import ChatWindow from '../navigation/ChatWindow'

const regionsStyles = {
  main: {
    
  },
  barTitle: {
    marginTop: '15px',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: '28px'
  },
  homeGraph: {
    display: 'flex',
    justifyContent: 'center'
  }
}

const data = [
  {
    name: '1950',
    DebtRunEnterprises: 4000,
    ProfitRunEnterprises: 2400,
    amt: 2400,
  },
  {
    name: '1970',
    DebtRunEnterprises: 3000,
    ProfitRunEnterprises: 1398,
    amt: 2210,
  },
  {
    name: '1990',
    DebtRunEnterprises: 2000,
    ProfitRunEnterprises: 9800,
    amt: 2290,
  },
  {
    name: '2010',
    DebtRunEnterprises: 2780,
    ProfitRunEnterprises: 3908,
    amt: 2000,
  },
  {
    name: '2020',
    DebtRunEnterprises: 1890,
    ProfitRunEnterprises: 4800,
    amt: 2181,
  },
  {
    name: '2040',
    DebtRunEnterprises: 2390,
    ProfitRunEnterprises: 3800,
    amt: 2500,
  }
]

const Regions: React.FC = () => {

  return (
    <>
      <Navigation />
      <main style={regionsStyles.main}>
        <ChatWindow />
        <div style={regionsStyles.barTitle}>
          Debt-Driven Solar Industry versus Profit Driven Solar Industry
        </div>
        <div style={regionsStyles.homeGraph}>
            <LineChart
              style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
              responsive
              data={data}
              margin={{
                top: 15,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" width="auto" />
              <YAxis yAxisId="right" orientation="right" width="auto" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="ProfitRunEnterprises" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="DebtRunEnterprises" stroke="#82ca9d" />
            </LineChart>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Regions