import { useState } from 'react'
import ContactUs from '../assets/ContactUs.gif'

const chatStyles = {
  buttonWrapper: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    background: 'white',
    border: '2px solid black',
    cursor: 'pointer',
    zIndex: '100'
  },
  popUp: {
    zIndex: '999',
    position: 'fixed',
    right: '40px',
    bottom: '200px'
  },
  popupWindow: {
    textAlign: 'center',
    border: '2px solid grey',
    backgroundColor: 'white',
    borderRadius: '2em',
    padding: '3em 1em 1em 1em',
    boxShadow: '12px 21px',
    height: '200px',
    width: '265px'
  },
  chatSendEmail: {
    border: '3px solid blue',
    backgroundColor: 'lightBlue',
    borderRadius: '1em',
    width: '100%'
  }
};

const ChatForm: React.FC = () => {
    return (
        <div style={chatStyles.popupWindow}>
            <h2>Get in touch!</h2>
            <button style={chatStyles.chatSendEmail} onClick={(e) => {window.location.href ='mailto:individual_csx@outlook.com'}}>Send an email</button>
        </div>
    )
}

const ChatWindow: React.FC = () => {
  // const [count, setCount] = useState(0)
  const [showWindow, setShowWindow] = useState(false)

  const showWindowToggle = () => {
    return setShowWindow(showWindow => !showWindow)
  }

  return (
    <>
        <div style={chatStyles.popUp}>{showWindow === true ? (<ChatForm />) : ''}</div>
        <div style={chatStyles.buttonWrapper} onClick={showWindowToggle}>
            <img src={ContactUs} alt="Contact Us Window Pop-up Button Gif of Typewriter Cartoon" width='100' height='60'/>
        </div>
    </>
  )
}

export default ChatWindow;