import React from 'react'

function Work() {
  return (
    <div className=' lg:mx-36 mt-20'>
        <h1>Work Experience</h1>
        <p>Fullstack developer @ <span className='text-white'>Wipro</span></p>
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
  )
}

export default Work