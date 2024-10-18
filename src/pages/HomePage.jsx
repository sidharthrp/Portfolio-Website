import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Projects from '../components/Projects'

function HomePage() {
  return (
    <div>
        {/* <Header /> */}
        <Hero />
        <About />
        <Work />
        <Projects />
    </div>
  )
}

export default HomePage