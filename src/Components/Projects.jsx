import React, { useRef } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { motion, useInView } from 'framer-motion'
import img from "../assets/portfolio.png"
import img1 from "../assets/dstarena.png"
import img2  from "../assets/ems.png"
import img3 from "../assets/Tmdb.png"


function Projects() {
  const { isLightTheme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div id="project" className='w-full pt-10 xl:pt-20' ref={ref}>
      <motion.h2 
        className={`text-4xl font-bold mb-10 ${
          isLightTheme ? 'text-gray-900' : 'text-white'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="border-b-4 border-purple-600 pb-1">Projects</span>
      </motion.h2>
      <motion.div 
        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
      <motion.div 
        className={`rounded-2xl p-2 border overflow-hidden shadow-lg ${
          isLightTheme 
            ? 'border-gray-300 bg-white text-gray-900' 
            : 'border-gray-600 bg-[#0F0F0F] text-white'
        }`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 100 }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      >
      {/* Image */}
      <motion.div 
        className='w-full h-56 overflow-hidden'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img className='w-full h-full object-cover' src={img} alt="" />
      </motion.div>
      
    
      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">Personal Portfolio</h2>
        <p className={`text-sm mb-4 ${
          isLightTheme ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Designed and built a fully responsive personal portfolio using ReactJS and Tailwind CSS to present my projects, skills, and work experience as a frontend developer.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            React js
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            Tailwind css
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            Emailjs
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <motion.a
          href="https://portfolio-teal-five-18.vercel.app/"
          className={`px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
            isLightTheme 
              ? 'text-purple-600 border-gray-300' 
              : 'text-purple-400 border-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center gap-2'>
            <h1>Live</h1>
            <h1><i class="ri-corner-down-right-line mt-2"></i></h1>
          </div>
        </motion.a>
         <motion.a
          href="https://github.com/Arunyadav46/portfolio"
          className={`px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
            isLightTheme 
              ? 'text-purple-600 border-gray-300' 
              : 'text-purple-400 border-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center gap-2'>
            <h1>Github</h1>
            <h1><i class="ri-github-fill"></i></h1>
          </div>
        </motion.a>
        
     </div>
       
      </div>
    </motion.div>

     <motion.div 
        className={`rounded-2xl p-2 border overflow-hidden shadow-lg ${
          isLightTheme 
            ? 'border-gray-300 bg-white text-gray-900' 
            : 'border-gray-600 bg-[#0F0F0F] text-white'
        }`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.25, type: "spring", stiffness: 100 }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      >
      {/* Image */}
      <motion.div 
        className='w-[100%] h-56 rounded-md overflow-hidden'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img className='w-full h-full rounded-md object-cover' src={img1} alt="" />
      </motion.div>
     

      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">Dstarena</h2>
        <p className={`text-sm mb-4 ${
          isLightTheme ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Developed the DSTARENA web app during my internship using ReactJS and Tailwind CSS. Added features like user registration, referral system, form validation, and API integration.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            React js
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            Tailwind css
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            Axios
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <motion.a
  href="https://ds-tarena-yei8.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-10 flex items-center gap-2 px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
    isLightTheme 
      ? 'text-purple-600 border-gray-300' 
      : 'text-purple-400 border-gray-700'
  }`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>Live</span>
  <i className="ri-corner-down-right-line mt-1"></i>
</motion.a>

<motion.a
  href="https://github.com/Arunyadav46/DSTarena"
  target="_blank"
  rel="noopener noreferrer"
  className={`relative z-10 flex items-center gap-2 px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
    isLightTheme 
      ? 'text-purple-600 border-gray-300' 
      : 'text-purple-400 border-gray-700'
  }`}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <span>Github</span>
  <i className="ri-github-fill"></i>
</motion.a>

     </div>
     
      </div>

    </motion.div>

      <motion.div 
        className={`rounded-2xl p-2 border overflow-hidden shadow-lg ${
          isLightTheme 
            ? 'border-gray-300 bg-white text-gray-900' 
            : 'border-gray-600 bg-[#0F0F0F] text-white'
        }`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      >
      {/* Image */}
      <motion.div 
        className='w-full h-56 overflow-hidden'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img className='w-full h-56 object-cover' src={img2} alt="" />
      </motion.div>
     

      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">EMS</h2>
        <p className={`text-sm mb-4 ${
          isLightTheme ? 'text-gray-600' : 'text-gray-400'
        }`}>
         Built a responsive Employee Management System using ReactJS and Tailwind CSS, featuring task assignment and tracking with Context API and LocalStorage—no backend required.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            React js
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            Context API
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            LocalStorage
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <motion.a
          href="https://task-manager-v996.vercel.app"
          className={`px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
            isLightTheme 
              ? 'text-purple-600 border-gray-300' 
              : 'text-purple-400 border-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center gap-2'>
            <h1>Live</h1>
            <h1><i class="ri-corner-down-right-line mt-2"></i></h1>
          </div>
        </motion.a>
         <motion.a
          href="https://github.com/Arunyadav46/EMS1"
          className={`px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
            isLightTheme 
              ? 'text-purple-600 border-gray-300' 
              : 'text-purple-400 border-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center gap-2'>
            <h1>Github</h1>
            <h1><i class="ri-github-fill"></i></h1>
          </div>
        </motion.a>
        
     </div>
     
       
      </div>
    </motion.div>

     <motion.div 
        className={`rounded-2xl p-2 border overflow-hidden shadow-lg ${
          isLightTheme 
            ? 'border-gray-300 bg-white text-gray-900' 
            : 'border-gray-600 bg-[#0F0F0F] text-white'
        }`}
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.55, type: "spring", stiffness: 100 }}
        whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      >
      {/* Image */}
      <motion.div 
        className='w-full h-56 overflow-hidden'
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img className='w-full h-56 object-contain' src={img3} alt="" />
      </motion.div>
     

      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">TMDB</h2>
        <p className={`text-sm mb-4 ${
          isLightTheme ? 'text-gray-600' : 'text-gray-400'
        }`}>
          Built a movie website using ReactJS and the TMDB API with real-time data for popular, trending, and top-rated movies. Designed a responsive UI using Tailwind CSS.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            React js
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            Axios
          </span>
          <span className={`text-sm px-3 py-1 rounded-full ${
            isLightTheme 
              ? 'bg-gray-100 text-purple-600' 
              : 'bg-[#1f1f1f] text-purple-300'
          }`}>
            React Router Dom
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <motion.a
          href="https://tmdb-2-six.vercel.app/"
          className={`px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
            isLightTheme 
              ? 'text-purple-600 border-gray-300' 
              : 'text-purple-400 border-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center gap-2'>
            <h1>Live</h1>
            <h1><i class="ri-corner-down-right-line mt-2"></i></h1>
          </div>
        </motion.a>
         <motion.a
          href="https://github.com/Arunyadav46/TMDB2"
          className={`px-4 py-2 border rounded-md text-[16px] font-semibold hover:underline text-sm ${
            isLightTheme 
              ? 'text-purple-600 border-gray-300' 
              : 'text-purple-400 border-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className='flex items-center gap-2'>
            <h1>Github</h1>
            <h1><i class="ri-github-fill"></i></h1>
          </div>
        </motion.a>
        
     </div>
     
       
      </div>
    </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects