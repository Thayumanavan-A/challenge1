import React from 'react'
import {Link} from "react-router-dom"

function Rating(props) {
  const rating = props.arr.map( obj => {   
  return <span key={obj.num} style={styles}className='w-10 h-10 rounded-3xl flex justify-evenly items-center cursor-pointer hover:bg-slate-500 hover:text-white' onClick={() => props.handleClick(obj.num)}><p>{obj.num}</p></span>
 })
  return (
    <div className='flex justify-center items-center h-lvh px-4 bg-black'>
        <div className=' w-full   sm:w-2/6 lg:w-1/4  h-3/6 sm:h-4/6  md:h-96  bg-gray-700 rounded-2xl  p-6 mx-4 flex  flex-col justify-around'>
        <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><img className='w-5' src="../public/images/icon-star.svg" alt="" /></span>
            <h1 className='text-3xl  font-semibold  text-white'>How did we do ?</h1>
            <p className=' text-slate-400'>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering</p>
            <div className='flex justify-around pt-4 text-slate-400'>
              {rating}
            </div>
            <Link to="/thanks"><button className='py-2 px-4 mt-4 bg-orange-500 rounded-full w-full text-white'>SUBMIT</button></Link>
        </div>
    </div>
  )
}

export default Rating