import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Addemp from './components/Addemp'
import Viewemp from './components/Viewemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/a" element={<Addemp />} />
        <Route path="/v" element={<Viewemp />} />
      </Routes>
    </>
  )
}

export default App
