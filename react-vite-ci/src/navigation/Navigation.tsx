const navigationStyles = {
  header: {

  },
  navBtn: {

  }
};

interface navigationType { title: string; route: string; }[]

const navigation: navigationType[] = [
  {title: 'Project Overview', route: 'Project'},
  {title: 'Regional Statistics', route: 'Regions'},
  {title: 'Historical Tracking', route: 'Tracking'},
  {title: 'Statistics By Power Source', route: 'Sources'},
  {title: 'Industry Panels', route: 'Industry'}
];

const NavigationButton: React.FC<navigationType> = (webpage) => {
  return (
    <div style={navigationStyles.navBtn} key={webpage.title}>
      <a href={`/${webpage.route}`}>{webpage.title}</a>
    </div>
  )
}

const Navigation: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header style={navigationStyles.header}>
        {/* hamburger? */}
        <nav>
          <ul>
            {navigation.map(webpage => (
              <NavigationButton
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