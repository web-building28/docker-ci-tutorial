import ProfileImage from '../assets/ProfileImage.svg'
import HeaderBackground from '../assets/HeaderBackground.png'

const navigationStyles = {
  header: {
    backgroundImage: `url(${HeaderBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginLeft: '1em',
    marginRight: '1em',
    height: 'auto',
    overflow: 'scroll'
  },
  titles: {
    backgroundColor: 'white',
    margin: '1em'
  },
  websiteTitle: {
    fontColor: 'black',
    fontSize: '50px',
  },
  subTitles: {
    fontColor: 'black',
    fontSize: '18px',
  },
  container: {
    textAlign: 'center',
    display: 'flex',
    height: '10em',
    width: '100vw'
  },
  containerItem: {
    marginTop: '3em',
    marginLeft: '2em',
    flexGrow: '1',
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '0.5em'
  },
  containerItemAndAlignment: {
    margin: '3em',
    flexGrow: '1',
    cursor: 'pointer'
  },
  menuItem: {
    color: 'white',
    fontSize: '20px'
  }
};

interface navigationType { title: string; route: string; key: string }[]

const navigation: navigationType[] = [
  {title: 'Project Overview', route: 'Project', key: '1'},
  {title: 'Regional Statistics', route: 'Regions', key: '2'},
  {title: 'Historical Tracking', route: 'Tracking', key: '3'},
  {title: 'Statistics By Power Source', route: 'Sources', key: '4'},
  {title: 'Industry Panels', route: 'Industry', key: '5'}
];

const NavigationButton: React.FC<navigationType> = (webpage) => {
  return (
    <div key={webpage.key}>
      <a style={navigationStyles.menuItem} href={`/${webpage.route}`}>{webpage.title}</a>
    </div>
  )
}

const Navigation: React.FC = () => {

  return (
    <>
      <header>
        <section style={navigationStyles.titles}>
          <div style={navigationStyles.websiteTitle}>Solar Panel Industry Statistical Analysis</div>
          <div style={navigationStyles.subTitles}>Department of Economics</div>
          <div style={navigationStyles.subTitles}>Reported by Project Data Enterprises</div>
          <div style={navigationStyles.subTitles}>Director: George Payne</div>
        </section>
        <div style={navigationStyles.header}>
          <nav>
              <div style={navigationStyles.container}>
                <a href={'/'}>
                  <img style={navigationStyles.containerItem} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
                </a>
                {navigation.map(webpage => (
                  <div style={navigationStyles.containerItemAndAlignment}>
                    <NavigationButton
                      key={webpage.key}
                      route={webpage.route}
                      title={webpage.title}
                      />
                  </div>
                ))}
              </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navigation;