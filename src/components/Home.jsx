import React from 'react'
import Sidebar from './Sidebar'

export const Home = () => {
  return (
    <div className=" m-auto lg:absolute w-full items-center justify-center mt-[7.5rem] " >
    <div className='flex flex-col lg:flex-row '>
      <div className='main-body lg:w-9/12 mt-5'></div>

        <Sidebar />
    </div>


    </div>
  )
}
