import React from 'react'

function About() {
  return (
    <div className=' lg:mx-36'>
        <h1>About Me</h1>
        <p className='mt-5 text-[#8892b0]'>
        Hey, I'm Sidharth! I'm a <span className='text-white'>full-stack developer </span>who loves building cool and functional web apps using <span className='text-white'>React</span> and <span className='text-white'>Express.js</span>. 
        I’m all about creating smooth user experiences and enjoy diving deep into both front-end and back-end development.
        </p>
        <p className='mt-5'>
        I've had the opportunity to work with a large company, gaining valuable experience, and now I’m currently focusing on freelance projects, helping clients bring their ideas to life.
        </p>
        <p className='mt-5'>Here are a few technologies I’ve been working with recently:</p>
        <ul className="mt-2 grid grid-cols-2  list-disc ml-5 ">
            <li className=' w-40 text-white hover:text-yellow-600 '>JavaScript (ES6+)</li>
            <li className=' w-40 text-white hover:text-yellow-600 '>React</li>
            <li className=' w-40 text-white hover:text-yellow-600 '>Express.js</li>
            <li className=' w-40 text-white hover:text-yellow-600 '>Node.js</li>
            <li className=' w-40 text-white hover:text-yellow-600 '>HTML 5</li>
            <li className=' w-40 text-white hover:text-yellow-600 '>Tailwind CSS</li>
        </ul>
    </div>
  )
}

export default About