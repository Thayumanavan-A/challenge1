import React from 'react'

function Rating() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='w-96 bg-slate-700 rounded-lg p-6'>
            <img src="../public/images/icon-star.svg" alt="" />
            <h1 className='text-3xl  font-semibold  text-white'>How did we do ?</h1>
            <p className=' text-slate-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis deserunt earum temporibus quasi vero officiis?</p>
            <div className='flex justify-around pt-4  text-slate-400'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
            </div>
            <button className='py-2 px-4 m-4 bg-red-600 rounded-full text-white'>Submit</button>
        </div>
    </div>
  )
}

export default Rating