import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList/PriceList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Navbar/>
      <h3 className='text-3xl text-lime-500'>Tailwind</h3>
      <PriceList/>
    </div>
  )
}

export default App
