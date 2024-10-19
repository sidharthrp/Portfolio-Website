import React from 'react'
import profilePic from '/images/ProfilePic.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'

function Hero() {
  const {scrollY} = useScroll();
  const opacity = useTransform(scrollY, [0,200,500], [1,0.5,0])
  const Y = useTransform(scrollY,[0,200], [-70,0])
  return (
      <motion.div className='flex justify-around items-center min-h-screen' 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 1, // Stagger for both text and image sections
            },
          },
        }}
        style={{opacity:opacity,y:Y}}
      >
        {/* Text section */}
        <motion.div className='flex flex-col gap-5 justify-center items-left'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1, y: 0, 
              transition: {
                duration: 0.7,
                staggerChildren: 0.4, // Apply staggerChildren to text block specifically
              },
            },
          }}
        >
          <motion.h1 className='text-lg'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Hey!
          </motion.h1>
    
          <motion.h1 className='text-6xl'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I'm <span className='text-[#5ECED4]'>Sidharth R Prakash</span>
          </motion.h1>
    
          <motion.h1 className='text-3xl'
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            A Fullstack Web Developer
          </motion.h1>
        </motion.div>
    
        {/* Image section */}
        <motion.div
          className='flex justify-center items-center relative'
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          <motion.img
            src={profilePic}
            className='hidden md:block h-72 w-72 rounded-full object-cover'
            alt="Profile"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />
        </motion.div>
      </motion.div>
    )
    
}

export default Hero