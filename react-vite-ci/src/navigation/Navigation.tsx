import ProfileImage from '../assets/ProfileImage.svg'

const navigationStyles = {
  header: {

  },
  menu: {
    cursor: 'pointer'
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
    <div style={navigationStyles.menu} key={webpage.key}>
      <a href={`/${webpage.route}`}>{webpage.title}</a>
    </div>
  )
}

const Navigation: React.FC = () => {

  return (
    <>
      <header style={navigationStyles.header}>
        {/* hamburger? */}
        <nav>
          <ul>
            <img style={navigationStyles.menu} src={ProfileImage} alt="Cartoon outline of male suit shoulders" width='100' height='60'/>
            {navigation.map(webpage => (
              <NavigationButton
                key={webpage.key}
                route={webpage.route}
                title={webpage.title}
                />
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navigation;