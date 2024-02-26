import { useState } from 'react'
import Rating from "./components/Rating";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Rating/>
    </>
  )
}

export default App
