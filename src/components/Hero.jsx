import React from 'react'
import profilePic from '/images/ProfilePic.jpg'

function Hero() {
  return (
    <div className='flex justify-around mt-28'>
        <div className='flex flex-col gap-5 justify-center items-left'>
        <h1 className='text-lg'>Hey!</h1>
        <h1 className='text-6xl'>I'm<span className='text-yellow-600'> Sidharth R Prakash </span></h1>
        <h1 className='text-3xl'>A Fullstack Web Developer</h1>
        {/* <button className='mt-4 bg-yellow-600 text-black w-28 h-12 rounded-2xl text-md uppercase hover:text-white'
         style={{ fontFamily: '"Protest Strike", sans-serif' }}>See Projects</button> */}
        </div>
        <div className='flex justify-center items-center'>
            <img src={profilePic} className='hidden md:block h-72 w-72 rounded-full'></img>
        </div>
    </div>
  )
}

export default Hero