import { useState } from 'react'
import ContactUs from '../assets/ContactUs.gif'

const chatStyles = {
  header: {

  },
  buttonWrapper: {
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    background: 'lightblue',
    padding: '15px',
    borderRadius: '50px',
    cursor: 'pointer',
    zIndex: '100'
  },
  popUp: {
    zIndex: '100',
    position: 'fixed'
  }
};

const ChatForm: React.FC = () => {
    return (
        <div>
            <h2>Chat window coming soon!</h2>
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