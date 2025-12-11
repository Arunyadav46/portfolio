import React, { useState } from 'react'
import { ThemeProvider, useTheme } from './Context/ThemeContext'
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

function AppContent() {
  const { isLightTheme } = useTheme();

  return (
    <div className={`w-full p-4 xl:p-10 xl:px-52 transition-colors duration-300 ${
      isLightTheme ? 'bg-gray-50' : 'bg-[#11111b]'
    }`}>
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

function App() {
    const [isLoading, setIsLoading] = useState(true);

  const handleLoaderFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loader onFinish={handleLoaderFinish} />;
  }

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App