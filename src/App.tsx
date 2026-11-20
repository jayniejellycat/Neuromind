import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Contact from './Contact.jsx'
import FAQ from './FAQ.jsx'


function App() {
 const [count, setCount] = useState(0)


 return (
   <>
    <Contact />
    <FAQ />
   </>
 );
}


export default App;




