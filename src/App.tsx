import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Contact from './Contact.jsx'

function App() {
  const [activePage, setActivePage] = useState('Home');

  return (
    <>
     <Contact />
    </>
  );
}

export default App; 
