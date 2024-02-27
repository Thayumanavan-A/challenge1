import React from 'react'

function Rating() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-1/5 h-96 bg-gray-700 rounded-2xl p-6 flex  flex-col justify-around'>
        <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><img className='w-5' src="../public/images/icon-star.svg" alt="" /></span>
            <h1 className='text-3xl  font-semibold  text-white'>How did we do ?</h1>
            <p className=' text-slate-400'>Please let us know how we did with your support request.All feedback is appreciated to help us improve our offering</p>
            <div className='flex justify-around pt-4  text-slate-400'>
                <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><p>1</p></span>
                <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><p>2</p></span>
                <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><p>3</p></span>
                <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><p>4</p></span>
                <span className='w-10 h-10 bg-gray-600 rounded-3xl flex justify-evenly items-center'><p>5</p></span>
            </div>
            <button className='py-2 px-4 mt-4 bg-orange-500 rounded-full w-full text-white'>SUBMIT</button>
        </div>
    </div>
  )
}

export default Rating