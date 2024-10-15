import React from 'react'

function Header() {
  return (
    <div className='flex justify-between m-2 h-10'>
        <div className='w-1/3 flex justify-center items-center'>
            <h1 className='text-lg'>Sidharth</h1>
        </div>
        
        <div className='w-2/3 flex justify-evenly items-center'>
            <p className='hover:text-yellow-600 cursor-pointer '>Home</p>
            <p className='hover:text-yellow-600 cursor-pointer '>About</p>
            <p className='hover:text-yellow-600 cursor-pointer '>Resume</p>
            <p className='hover:text-yellow-600 cursor-pointer '>Projects</p>
            <p className='hover:text-yellow-600 cursor-pointer '>Skills</p>
            <p className='hover:text-yellow-600 cursor-pointer '>Contact</p>  
        </div>
              
    </div>
  )
}

export default Header