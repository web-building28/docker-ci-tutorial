const footerStyles = {
    container: {
        backgroundColor: 'black',
        textAlign: 'left',
        color: 'white',
        width: '100vw',
        bottom: '0px'
    },
    text: {
        marginLeft: '6em'
    }
}

const Footer: React.FC = () => {
    return (
        <div style={footerStyles.container}>
            <p style={footerStyles.text}>Copyright 2026 - George Payne - All content is fictional.</p><br/>
            <p style={footerStyles.text}>Some facts about solar energy are based on research. Feel free to do your own fact checking.</p><br/>
            <p style={footerStyles.text}>Built with React, Vite, Redux Toolkit, TypeScript, dummy data from RTK API calls, and Rechart.js</p><br />   
            <p style={footerStyles.text}>Using Docker, GitHub Actions, and Elastic Beanstalk for the Continuous Integration website hosting.</p>       
        </div>
    )
}

export default Footer