import React from 'react'
import { useState } from 'react'
import Rating from "./components/Rating";
import './App.css'
import ThanksCard from './components/ThanksCard';
import {Routes,Route} from "react-router-dom"

function App() {
  const [selectedRating,SetSelectedRating] = useState();
  const [doneRating, setDoneRating] = useState(false);
  const arr = [1,2,3,4,5]

  const handleClick = (num)=> {
    SetSelectedRating(num)
    setDoneRating(!doneRating)
  }
 
 
  console.log(selectedRating)

  return (
    <>
     <Routes>
     <Route path="/" element={<Rating 
      arr={arr}
      handleClick={handleClick}
      doneRating={doneRating}
      />} />
     {doneRating && <Route path="/thanks" element={<ThanksCard  selectedRating={selectedRating}/>} /> }
     </Routes>
    </>
  )
}

export default App
