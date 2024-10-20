import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <div>
    <div className='mt-20 flex justify-center items-center gap-5 mb-10'>
        <p>sidharthrprakash@gmail.com</p>
        <a href="mailto:your-sidharthrprakash@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className='text-2xl hover:text-white' /></a>
        <a href='https://github.com/sidharthrp'  target="_blank" rel="noopener noreferrer"><FaGithub className='text-2xl hover:text-white'/></a>
        <a href='https://www.linkedin.com/in/sidharth-r-prakash-a83199236/'  target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-2xl hover:text-white'/></a>
        <a href='https://www.instagram.com/s_r_p_._/' target="_blank" rel="noopener noreferrer"><FaInstagram className='text-2xl hover:text-white' /></a>
    </div>
    </div>
  )
}

export default Footer