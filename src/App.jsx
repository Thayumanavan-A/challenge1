import React from 'react'
import { useState } from 'react'
import Rating from "./components/Rating";
import './App.css'

function App() {
  const [selectedRating,SetSelectedRating] = React.useState();
  const [ratingSubmit, SetRatingSubmit ] = React.useState(false);
  const arr = [1,2,3,4,5]

  const handleClick = (num)=> {
    SetSelectedRating(num)
  }
  const handleSubmit = ()=> {
    SetRatingSubmit(!ratingSubmit)
  }
 
  console.log(selectedRating)
  console.log(ratingSubmit)

  return (
    <>
      <Rating 
          arr={arr}
          selectedRating={selectedRating}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          />
          
    </>
  )
}

export default App
