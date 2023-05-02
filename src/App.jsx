import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FloorPlan from './components/FloorPlan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <FloorPlan />
    </div>
  )
}

export default App
