import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Loader from './Components/Loader'


function App() {
    const [isLoading, setIsLoading] = useState(true);

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onFinish={handleLoaderFinish} />;
  }

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