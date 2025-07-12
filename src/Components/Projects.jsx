import React from 'react'
import img from "../assets/portfolio.png"
import img1 from "../assets/dstarena.png"
import img2  from "../assets/ems.png"
import img3 from "../assets/Tmdb.png"


function Projects() {
  return (
    <div id="project" className='w-full pt-10  xl:pt-20 '>
     {/* <h2 className="text-4xl font-bold border-b-4 border-purple-600 text-white mb-14 xl:mb-20">Projects</h2> */}
      <h2 className="text-4xl font-bold text-white mb-10">
    <span className="border-b-4 border-purple-600 pb-1">Projects</span>
  </h2>
     <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      <div className=" rounded-2xl p-2 border border-gray-600 overflow-hidden shadow-lg bg-[#0F0F0F] text-white">
      {/* Image */}
      <div className='w-full h-56'>
        <img className='w-full h-full' src={img} alt="" />
      </div>
      
    
      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">Personal Portfolio</h2>
        <p className="text-gray-400 text-sm mb-4">
          Designed and built a fully responsive personal portfolio using ReactJS and Tailwind CSS to present my projects, skills, and work experience as a frontend developer.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            React js
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Tailwind css
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Emailjs
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <a
          href="https://portfolio-teal-five-18.vercel.app/"
          className="text-purple-400 px-4 py-2  border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
        >
          <div className='flex items-center gap-2'>
            <h1>Live</h1>
            <h1><i class="ri-corner-down-right-line mt-2"></i></h1>
          </div>
        </a>
         <a
          href="https://github.com/Arunyadav46/portfolio"
          className="text-purple-400 px-4 py-2  border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
        >
          <div className='flex items-center gap-2'>
            <h1>Github</h1>
            <h1><i class="ri-github-fill"></i></h1>
          </div>
        </a>
        
     </div>
       
      </div>
    </div>

     <div className=" rounded-2xl p-2 border border-gray-600 overflow-hidden shadow-lg bg-[#0F0F0F] text-white">
      {/* Image */}
       {/* Image */}
      <div className='w-[100%] h-56  rounded-md'>
        <img className='w-full h-full  rounded-md' src={img1} alt="" />
      </div>
     

      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">Dstarena</h2>
        <p className="text-gray-400 text-sm mb-4">
          Developed the DSTARENA web app during my internship using ReactJS and Tailwind CSS. Added features like user registration, referral system, form validation, and API integration.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            React js
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Tailwind css
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Axios
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
      <a
  href="https://ds-tarena-yei8.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-purple-400 px-4 py-2 border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
>
  <span>Live</span>
  <i className="ri-corner-down-right-line mt-1"></i>
</a>

<a
  href="https://github.com/Arunyadav46/DSTarena"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-purple-400 px-4 py-2 border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
>
  <span>Github</span>
  <i className="ri-github-fill"></i>
</a>


     </div>
     
       
      </div>
    </div>

      <div className=" rounded-2xl p-2 border border-gray-600 overflow-hidden shadow-lg bg-[#0F0F0F] text-white">
      {/* Image */}
      <img className='w-full h-56' src={img2} alt="" />
     

      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">EMS</h2>
        <p className="text-gray-400 text-sm mb-4">
         Built a responsive Employee Management System using ReactJS and Tailwind CSS, featuring task assignment and tracking with Context API and LocalStorage—no backend required.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            React js
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Tailwind css
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Emailjs
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <a
          href="https://ems-1-two.vercel.app"
          className="text-purple-400 px-4 py-2  border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
        >
          <div className='flex items-center gap-2'>
            <h1>Live</h1>
            <h1><i class="ri-corner-down-right-line mt-2"></i></h1>
          </div>
        </a>
         <a
          href="https://github.com/Arunyadav46/EMS1"
          className="text-purple-400 px-4 py-2  border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
        >
          <div className='flex items-center gap-2'>
            <h1>Github</h1>
            <h1><i class="ri-github-fill"></i></h1>
          </div>
        </a>
        
     </div>
     
       
      </div>
    </div>

     <div className=" rounded-2xl p-2 border border-gray-600 overflow-hidden shadow-lg bg-[#0F0F0F] text-white">
      {/* Image */}
      <img className='w-full h-56 object-contain' src={img3} alt="" />
     

      {/* Content */}
      <div className="p-2">
        <h2 className="text-2xl font-semibold mb-2">TMDB</h2>
        <p className="text-gray-400 text-sm mb-4">
          A seamless food delivery platform similar to Zomato, featuring real-time order tracking,
          restaurant discovery, and secure payment processing.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            React js
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Tailwind css
          </span>
          <span className="bg-[#1f1f1f] text-sm px-3 py-1 rounded-full text-purple-300">
            Emailjs
          </span>
        </div>
     
     <div className='flex justify-between p-2'>
     <a
          href="#"
          className="text-purple-400 px-4 py-2  border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
        >
          <div className='flex items-center gap-2'>
            <h1>Live</h1>
            <h1><i class="ri-corner-down-right-line mt-2"></i></h1>
          </div>
        </a>
         <a
          href="#"
          className="text-purple-400 px-4 py-2  border border-gray-700 rounded-md text-[16px] font-semibold hover:underline text-sm"
        >
          <div className='flex items-center gap-2'>
            <h1>Github</h1>
            <h1><i class="ri-github-fill"></i></h1>
          </div>
        </a>
        
     </div>
     
       
      </div>
    </div>
    
    </div>
    </div>
  )
}

export default Projects