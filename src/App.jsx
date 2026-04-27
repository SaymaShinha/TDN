import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavScroll from './Components/Navbar';
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavScroll></NavScroll>
      <div className="flex-grow-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
