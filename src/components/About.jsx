import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import resume from '/docs/resume.pdf'
import { CgArrowTopRight } from "react-icons/cg";

function About() {
    const {scrollY} = useScroll();
    const opacity = useTransform(scrollY, [0,200,500], [0,0.5,1])
    // const Y = useTransform(scrollY,[0,1000], [-20,0])
  return (
    <motion.div className=' lg:mx-36' style={{opacity:opacity}}>
        <h1 className='mt-5 text-3xl'>About Me</h1>
        <div className='p-4'>
        <p className='text-lg mt-5 text-[#8892b0]'>
        Hey, I'm Sidharth! I'm a <span className='text-white'>full-stack developer </span>who loves building cool and functional web apps using <span className='text-white'>React</span> and <span className='text-white'>Express.js</span>. 
        I’m all about creating smooth user experiences and enjoy diving deep into both front-end and back-end development.
        </p>
        <p className='text-lg mt-5'>
        I've had the opportunity to work with a large company, gaining valuable experience, and I’m currently focusing on freelance projects, helping clients bring their ideas to life.
        </p>
        <p className='text-lg mt-5'>Here are a few technologies I’ve been working with recently:</p>
        <motion.ul className="mt-2 grid grid-cols-2  list-disc ml-5 text-lg" >
            <motion.li className=' w-40 text-white hover:text-[#64ffda]' >JavaScript (ES6+)</motion.li>
            <motion.li className=' w-40 text-white hover:text-[#64ffda]' >React</motion.li>
            <motion.li className=' w-40 text-white hover:text-[#64ffda]' >Express.js</motion.li>
            <motion.li className=' w-40 text-white hover:text-[#64ffda]' >Node.js</motion.li>
            <motion.li className=' w-40 text-white hover:text-[#64ffda]' >HTML 5</motion.li>
            <motion.li className=' w-40 text-white hover:text-[#64ffda]' >Tailwind CSS</motion.li>
        </motion.ul>
        <motion.p className='hover:text-[#64ffda] mt-5 flex items-center hover:cursor-pointer text-white text-lg' 
        onClick={() => window.open(resume, "_blank")} style={{ display: 'inline-flex' }} whileHover={{scale:[1.1]}}>See Full Resume <CgArrowTopRight /></motion.p>
        </div>
    </motion.div>
  )
}

export default About