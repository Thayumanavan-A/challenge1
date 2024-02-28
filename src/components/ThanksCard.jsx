import React from 'react'

function ThanksCard(props) {
  return (
    <div className= 'h-screen bg-black flex justify-center items-center'>
        <div className='text-white  bg-gray-700 w-full  sm:w-2/5 md:w-1/2 lg:w-2/12  h-3/5 sm:h-96  md:h-3/4 lg:h-1/2 rounded-2xl  p-6 mx-8 flex  flex-col justify-around items-center '>
            <img src="../public/images/illustration-thank-you.svg" alt="" />
            <p className='px-4 py-1  text-sm bg-gray-600 border-2 rounded-2xl text-amber-600 border-transparent'>{`you selected ${props.selectedRating} out of 5`}</p>
            <h2 className='font-bold text-2xl'>Thank You!</h2>
            <p className='text-gray-400 text-center px-2'>We appreciate you taking the time to give a rating.If you ever need more support, don't hesitate tp get in touch!</p>
        </div>
    </div>
  )
}

export default ThanksCard