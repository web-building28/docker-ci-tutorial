const footerStyles = {
    container: {
        backgroundColor: 'black',
        textAlign: 'left',
        color: 'white',
        width: '100vw',
        height: '50px',
        bottom: '0px'
    },
    text: {
        marginLeft: '6em'
    }
}

const Footer: React.FC = () => {
    return (
        <div style={footerStyles.container}>
            <p style={footerStyles.text}>Copyright 2026 - George Payne - All content is fictional.</p>
        </div>
    )
}

export default Footer