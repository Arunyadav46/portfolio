import React, { useState, useEffect } from 'react'
import img from "../assets/Avatar.png"
import { Link } from 'react-scroll';
import { useTheme } from '../Context/ThemeContext';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isLightTheme, toggleTheme } = useTheme();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

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
      <motion.div
        id="nav"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`xl:w-full w-full p-3 md:p-5 xl:h-[10vh] flex items-center justify-between xl:px-8 rounded-full border border-white/20 transition-all duration-300 ${
          isLightTheme ? 'bg-white' : 'bg-[#112240]'
        } ${isScrolled ? 'shadow-lg' : ''}`}
      >
        <motion.div 
          className='w-[10%] md:w-[3%]'
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img className='w-full h-full' src={img} alt="Arun" />
        </motion.div>

        <div className={`hidden md:flex gap-20 text-[17px] ${isLightTheme?'text-black':'text-white'} `}>
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About" },
              { to: "skill", label: "Skills" },
              { to: "experience", label: "Experience" },
              { to: "project", label: "Projects" }
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  to={item.to}
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="cursor-pointer relative group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      isLightTheme ? 'bg-purple-600' : 'bg-purple-400'
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
        </div>

        {/* <div className="hidden md:block text-white border-1 px-3 py-2 bg-[#1e2a3a] rounded-full">
          <h2><i className="text-[19px] ri-moon-line"></i></h2>
        </div> */}

          <motion.div
            onClick={toggleTheme}
            className={`hidden md:block px-3 py-2 rounded-full cursor-pointer transition-all duration-300 ${
              isLightTheme ? 'bg-[#E7D0E2] text-black' : 'bg-[#1e2a3a] text-white'
            }`}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <h2>
              <motion.i 
                className={`text-[19px] ${isLightTheme ? 'ri-sun-line' : 'ri-moon-line'}`}
                animate={{ rotate: isLightTheme ? 0 : 180 }}
                transition={{ duration: 0.5 }}
              ></motion.i>
            </h2>
          </motion.div>

        <motion.div 
          className={`text-3xl md:hidden ${isLightTheme ? 'text-black' : 'text-white'}`} 
          onClick={() => setIsOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          <i className="ri-menu-4-line cursor-pointer"></i>
        </motion.div>
      </motion.div>

      {/* SIDEBAR */}
      <motion.div 
        className={`fixed top-0 left-0 h-full w-full z-50 p-6 ${
          isLightTheme ? 'bg-white text-black' : 'bg-[#11111b] text-white'
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
      >
        {/* Close Icon */}
        <motion.div 
          className="flex justify-end mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.i 
            className="ri-close-line text-3xl cursor-pointer" 
            onClick={() => setIsOpen(false)}
            whileHover={{ rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          ></motion.i>
        </motion.div>
        {/* Sidebar Content */}
        <ul className="space-y-6 flex flex-col text-lg">
          {[
            { to: "home", label: "Home" },
            { to: "about", label: "About" },
            { to: "skill", label: "Skills" },
            { to: "experience", label: "Experience" },
            { to: "project", label: "Projects" }
          ].map((item, index) => (
            <motion.div
              key={item.to}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </ul>
        {/* Theme Toggle for Mobile */}
        <div className={`mt-8 pt-8 border-t ${
          isLightTheme ? 'border-gray-300' : 'border-gray-600'
        }`}>
          <div
            onClick={() => {
              toggleTheme();
              setIsOpen(false);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-full cursor-pointer transition-all duration-300 ${
              isLightTheme ? 'bg-[#E7D0E2] text-black' : 'bg-[#1e2a3a] text-white'
            }`}
          >
            <i className={`text-xl ${isLightTheme ? 'ri-sun-line' : 'ri-moon-line'}`}></i>
            <span>{isLightTheme ? 'Light Mode' : 'Dark Mode'}</span>
          </div>
        </div>
      </motion.div>

      {/* OVERLAY */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      )}
    </>
  )
}

export default Navbar