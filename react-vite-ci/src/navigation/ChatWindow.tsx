import { useState } from 'react'
import ContactUs from '../assets/ContactUs.gif'

const chatStyles = {
  header: {

  },
  buttonWrapper: {
    position: 'absolute',
    right: '40px',
    bottom: '40px',
    background: 'lightblue',
    padding: '15px',
    borderRadius: '50px'
  }
};

//make styles for progressive web app

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
        <p>{showWindow === true ? (<ChatForm />) : ''}</p>
        <div style={chatStyles.buttonWrapper} onClick={showWindowToggle}>
            <img src={ContactUs} alt="Contact Us Window Pop-up Button Gif of Typewriter Cartoon" width='100' height='60'/>
        </div>
    </>
  )
}

export default ChatWindow;