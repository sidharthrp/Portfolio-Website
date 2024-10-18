import React from 'react'
import ebuy from '/images/Ebuy-Homepage.png'
import blog from '/images/Blog-Homepage.png'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className='lg:mx-36 mt-2 '>
  <h1 className='text-2xl'>Recent Projects</h1>
  <div className='p-4 clearfix hover:shadow-lg hover:bg-[#15213a] group hover:text-white'>
    <h2 className=' '><strong className='text-xl text-white group-hover:text-yellow-600'>E-Buy</strong> (An E-commerce Application)</h2>
    <img src={ebuy} className='mr-4 h-32 w-64 my-2 md:float-left' alt='E-buy project' />

    <div>
      <ul className="list-disc list-inside text-left mb-4 leading-7">
        <li><strong className='text-white group-hover:text-yellow-600'>Responsive Design</strong>: Optimized for all screen sizes, ensuring a smooth experience on mobile, tablet, and desktop.</li>
        <li><strong className='text-white group-hover:text-yellow-600'>Full-Stack Development</strong>: Built using <strong>React.js</strong> on the front end and <strong>Firebase</strong> on the back end, with user authentication and cart management.</li>
        <li><strong className='text-white group-hover:text-yellow-600'>Payment Integration</strong>: Simulating a real-world checkout process with secure payment options.</li>
      </ul>
    </div>

    {/* Icons for website and GitHub links */}
    <div className="mt-2 flex justify-left gap-5 w-64" style={{ clear: 'both' }}>
      <a href='https://e-buy-f98ad.web.app/' target="_blank" rel="noopener noreferrer">
        <HiMiniArrowTopRightOnSquare className="inline-block text-2xl hover:text-yellow-600" />
      </a>
      <a href='https://github.com/sidharthrp/E-buy' target="_blank" rel="noopener noreferrer">
        <FaGithub className="inline-block text-2xl hover:text-yellow-600" />
      </a>
    </div>
  </div>

  <div className='p-4 clearfix hover:shadow-lg hover:bg-[#15213a] group hover:text-white'>
  <h2 className=' '><strong className='text-xl text-white group-hover:text-yellow-600'>Wandering Sid</strong> (A Blog Application)</h2>
    <img src={blog} className='mr-4 h-32 w-64 my-2 md:float-left' alt='Blog' />

    <div>
      <ul className="list-disc list-inside text-left mb-4 leading-7">
        <li><strong className='text-white group-hover:text-yellow-600'>PERN Stack application</strong>: Supports <strong>CRUD </strong>operations for managing blog posts.</li>
        <li><strong className='text-white group-hover:text-yellow-600'>Routing and states</strong>: <strong>React hooks</strong> for state management and <strong>React Router</strong> for navigation.</li>
        <li><strong className='text-white group-hover:text-yellow-600'>Backend and database Support</strong>: Used <strong>Express.js</strong> for <strong>RESTful APIs</strong>, while <strong>PostgreSQL</strong> managed data storage.</li>
      </ul>
    </div>

    {/* Icons for website and GitHub links */}
    <div className="mt-2 flex justify-left gap-5 w-64" style={{ clear: 'both' }}>
      <a href='' target="_blank" rel="noopener noreferrer">
        <HiMiniArrowTopRightOnSquare className="inline-block text-2xl hover:text-yellow-600" />
      </a>
      <a href='https://github.com/sidharthrp/PERN-Stack-Blog-App' target="_blank" rel="noopener noreferrer">
        <FaGithub className="inline-block text-2xl hover:text-yellow-600" />
      </a>
    </div>
  </div>
</div>
  )
}

export default Projects