import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className='w-full  bg-[#11111b] p-4 xl:p-10 xl:px-52'>
       <Navbar/>
       <Hero/>
       <About/>
       <Skills/>
       <Experience/>
       <Education/>
       <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App