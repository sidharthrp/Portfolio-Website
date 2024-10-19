import React from 'react'

function Work() {
  return (
    <div className='min-h-screen lg:mx-36 mt-20'>
        <h1 className='text-3xl mb-3'>Work Experience</h1>
        <div className='hover:bg-[#15213a] p-4 hover:shadow-lg group hover:text-white rounded-lg text-lg'>
        <p className=' text-xl'>Fullstack developer @ <span className='text-white group-hover:text-[#64ffda]'>Wipro</span></p>
        <p className=''>2021-2024</p>
        <br/>
        <ul className=' list-disc ml-4 mb-5'>
            <li>Developed, maintained, and tested the UI for an Embedded Web Server using
                HTML, CSS, JavaScript, and jQuery along with C++.
            </li>
            <li>Implemented UI for VPN server functionality within the web server, significantly
                enhancing user accessibility, leading to a 10% increase in active users and positive
                client feedback.
            </li>
            <li>Engineered APIs for Firewall,IPsec, VPN and configuration pages, improving
                performance and reducing loading time
            </li>
            <li>Resolved over 3000 bugs, vulnerabilities and code smells detected by SonarQube,
                bringing the web UI codebase to the latest standards.
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Work