import React from 'react'
import { useState } from 'react'
import Rating from "./components/Rating";
import './App.css'
import ThanksCard from './components/ThanksCard';
import {Routes,Route} from "react-router-dom"

function App() {
  const [selectedRating,SetSelectedRating] = useState();
  const [doneRating, setDoneRating] = useState(false);
  const [arr,setArr] = useState([{num:1,selected:false},{num:2,selected:false},{num:3,selected:false},{num:4,selected:false},{num:5,selected:false}])

  const handleClick = (num)=> {

    SetSelectedRating(num)
    setDoneRating(!doneRating)
    setArr(prevArr => {
      return prevArr.map((obj) => {
        return obj.num === num ? {...obj,selected:!obj.selected} : obj
      })
    })
  }
 
console.log(arr)
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
