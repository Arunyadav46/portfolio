import React, { useState } from 'react'
import img from "../assets/Avatar.png"
import { Link } from 'react-scroll';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
//     <div id="nav" className='xl:w-full  w-full p-3   md:p-5 xl:h-[10vh] flex items-center justify-between xl:px-8  rounded-full bg-[#112240] border border-white/20'>
//         <div className='w-[10%] md:w-[3%]'>
//             <img className='w-full h-full' src={img} alt="Arun" />
//         </div>  
//         <div className='hidden md:block md:flex gap-20 text-[17px] text-white'>
//           <h2>Home</h2>
//           <h2>About</h2>
//           <h2>Skills</h2>
//           <h2>Experience</h2>
//           <h2>Projects</h2>
//         </div>
//         <div className="hidden md:block text-white border-1 px-3 py-2 bg-[#1e2a3a] rounded-full">
//   <h2><i className="text-[19px] ri-moon-line"></i></h2>
 
// </div>
//  <div className='text-3xl text-white md:hidden'>
//     <i class="ri-menu-4-line"></i>
//   </div>


//     </div>

    <>
      {/* NAVBAR */}
      {/* <div id="nav" className='xl:w-full w-full p-3 md:p-5 xl:h-[10vh] flex items-center justify-between xl:px-8 rounded-full bg-[#112240] border border-white/20'> */}
      <div
  id="nav"
  className={`xl:w-full w-full p-3 md:p-5 xl:h-[10vh] flex items-center justify-between xl:px-8 rounded-full border border-white/20 transition-all duration-300 ${
    isLightTheme ? 'bg-white' : 'bg-[#112240]'
  }`}
>
        <div className='w-[10%] md:w-[3%]'>
          <img className='w-full h-full' src={img} alt="Arun" />
        </div>

        <div className={`hidden md:flex gap-20 text-[17px] ${isLightTheme?'text-black':'text-white'} `}>
            <Link
        to="home"
        smooth={true}
        duration={600}
        offset={-70}
        className="cursor-pointer"
      >
        Home
      </Link>
             <Link
        to="about"
        smooth={true}
        duration={600}
        offset={-70}
        className="cursor-pointer"
      >
        About
      </Link>
          
         <Link
        to="skill"
        smooth={true}
        duration={600}
        offset={-70}
        className="cursor-pointer"
      >
       Skills
      </Link>


           <Link
        to="experience"
        smooth={true}
        duration={600}
        offset={-70}
        className="cursor-pointer"
      >
       Experience
      </Link>

             <Link
        to="project"
        smooth={true}
        duration={600}
        offset={-70}
        className="cursor-pointer"
      >
       Projects
      </Link>

        </div>

        {/* <div className="hidden md:block text-white border-1 px-3 py-2 bg-[#1e2a3a] rounded-full">
          <h2><i className="text-[19px] ri-moon-line"></i></h2>
        </div> */}

          <div
      onClick={toggleTheme}
      className={`hidden md:block text-white px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ${
        isLightTheme ? 'bg-[#E7D0E2]' : 'bg-[#1e2a3a]'
      }`}
    >
      <h2>
        <i className={`text-[19px] ${isLightTheme ? 'ri-sun-line text-black' : 'ri-moon-line'}`}></i>
      </h2>
    </div>

        <div className='text-3xl text-white md:hidden' onClick={() => setIsOpen(true)}>
          <i className="ri-menu-4-line cursor-pointer"></i>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className={`fixed top-0 left-0 h-full w-full  bg-[#11111b] text-white z-50 p-6 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Close Icon */}
        <div className="flex justify-end mb-6">
          <i className="ri-close-line text-3xl cursor-pointer" onClick={() => setIsOpen(false)}></i>
        </div>
        {/* Sidebar Content */}
        <ul className="space-y-6 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Experience</li>
          <li>Projects</li>
        </ul>
      </div>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}

export default Navbar