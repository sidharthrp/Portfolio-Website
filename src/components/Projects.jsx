import React from 'react'
import ebuy from '/images/Ebuy-Homepage.png'


function Projects() {
  return (
    <div className='lg:mx-36 mt-20'>
        <h1>Latest Projects</h1>
        <h2 className='text-white'>E-buy</h2>
        <img src={ebuy} className='h-32 my-2' ></img>
        <a href='https://e-buy-f98ad.web.app/'>Website</a>
        <a href='https://github.com/sidharthrp/E-buy'>Github</a>
    </div>
  )
}

export default Projects