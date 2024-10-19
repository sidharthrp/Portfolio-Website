import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Footer />
    </div>
  )
}

export default HomePage