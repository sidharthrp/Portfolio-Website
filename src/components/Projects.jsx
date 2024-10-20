import React from 'react'
import ebuy from '/images/Ebuy-Homepage.png'
import blog from '/images/Blog-Homepage.png'
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <div className='lg:mx-36 mt-2  mt-20'>
        <h1 className='text-3xl mb-3'>Recent Projects</h1>
        <div className='mb-3 p-4 clearfix hover:shadow-lg hover:bg-[#15213a] group hover:text-white rounded-lg'>
            <h2 className=' '><strong className='text-xl text-white group-hover:text-[#64ffda]'>E-Buy</strong> (An E-commerce Application)</h2>
            <img src={ebuy} className='mr-4 h-32 w-64 my-2 md:float-left' alt='E-buy project' />
            <div>
                <ul className="list-disc list-inside text-left mb-4 leading-7">
                    <li><strong className='text-white group-hover:text-[#64ffda]'>Responsive Design</strong>: Optimized for all screen sizes, ensuring a smooth experience on mobile, tablet, and desktop.</li>
                    <li><strong className='text-white group-hover:text-[#64ffda]'>Full-Stack Development</strong>: Built using <strong>React.js</strong> on the front end and <strong>Firebase</strong> on the back end, with user authentication and cart management.</li>
                    <li><strong className='text-white group-hover:text-[#64ffda]'>Payment Integration</strong>: Simulating a real-world checkout process with secure payment options.</li>
                </ul>
            </div>

            <div className="mt-2 flex justify-left gap-5 w-64" style={{ clear: 'both' }}>
                <a href='https://e-buy-f98ad.web.app/' target="_blank" rel="noopener noreferrer">
                    <HiMiniArrowTopRightOnSquare className="inline-block text-2xl hover:text-[#64ffda]" /></a>
                <a href='https://github.com/sidharthrp/E-buy' target="_blank" rel="noopener noreferrer">
                <FaGithub className="inline-block text-2xl hover:text-[#64ffda]" /></a>
            </div>

        </div>
        <div className='p-4 clearfix hover:shadow-lg hover:bg-[#15213a] group hover:text-white rounded-lg'>
            <h2 className=' '><strong className='text-xl text-white group-hover:text-[#64ffda]'>Wandering Sid</strong> (A Blog Application)</h2>
            <img src={blog} className='mr-4 h-32 w-64 my-2 md:float-left' alt='Blog' />
            <div>
                <ul className="list-disc list-inside text-left mb-4 leading-7">
                    <li><strong className='text-white group-hover:text-[#64ffda]'>PERN Stack application</strong>: Supports <strong>CRUD </strong>operations for managing blog posts.</li>
                    <li><strong className='text-white group-hover:text-[#64ffda]'>Routing and states</strong>: <strong>React hooks</strong> for state management and <strong>React Router</strong> for navigation.</li>
                    <li><strong className='text-white group-hover:text-[#64ffda]'>Backend and database Support</strong>: Used <strong>Express.js</strong> for <strong>RESTful APIs</strong>, while <strong>PostgreSQL</strong> managed data storage.</li>
                </ul>
            </div>
            <div className="mt-2 flex justify-left gap-5 w-64" style={{ clear: 'both' }}>
                <a href='' target="_blank" rel="noopener noreferrer">
                    <HiMiniArrowTopRightOnSquare className="inline-block text-2xl hover:text-[#64ffda]" /></a>
                <a href='https://github.com/sidharthrp/PERN-Stack-Blog-App' target="_blank" rel="noopener noreferrer">
                    <FaGithub className="inline-block text-2xl hover:text-[#64ffda]" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Projects