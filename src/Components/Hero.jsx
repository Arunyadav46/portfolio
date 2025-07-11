import React from 'react'
import img from "../assets/react.svg"
import img1 from "../assets/nodej.png"
import img2 from "../assets/tailwind.png"
import img3 from "../assets/redux.svg"

function Hero() {
  return (
//     <div id="home" className='w-full xl:h-[85vh] md:flex relative  pt-20'>
//         <div className='w-[50%] text-white'>
//             <h1 className='text-5xl font-semibold mb-3'>Arun Yadav</h1>
//             <h2 className='text-2xl text-gray-400 mb-6'>React Developer</h2>
//             <div className='flex gap-5 mb-5 text-gray-400 ietms-center'>
//                 <div className='flex items-center'>
//                     <h1><i class="ri-mail-line"></i></h1>
//                     <h1>yarun4622@gmail.com</h1>
//                 </div>
//                 <div className='flex items-center'>
//                     <h1><i class="ri-map-pin-line"></i></h1>
//                     <h1>Bhopal,India</h1>
//                 </div>
//             </div>
//             <div className='mb-12'>
//                 <p className='text-gray-300 text-[18px]'>A goal-oriented software developer with experience in building web applications using modern technologies like React, Next.js, and more. Seeking to leverage my technical skills to deliver exceptional user experiences.</p>
//             </div>
//             <div className='flex gap-6 items-center'>
//                 <div className='flex items-center gap-2 px-5 py-2 bg-white w-fit text-black rounded-md'>
//                     <h1><i class="ri-download-line"></i></h1>
//                      <h2>Resume</h2>
//                 </div>
//                 <div className='flex gap-4'>
//                     <h2 className='px-4 py-1 border-gray-800 rounded-md border-2'><i className="text-xl ri-github-fill"></i></h2>
//                     <h2 className='px-4 py-1 border-gray-800 rounded-md border-2'><i className="text-xl ri-linkedin-fill"></i></h2>
//                     <h2 className='px-4 py-1 border-gray-800 rounded-md border-2'><i className="text-xl ri-whatsapp-line"></i></h2>
//                     <h2 className='px-4 py-1 border-gray-800 rounded-md border-2'><i className="text-xl ri-phone-line"></i></h2>
//                 </div>
//             </div>
//         </div>
//         <div className='w-[50%] p-5'>

//             {/* glowing effect */}

//        {/* Glow from the left with slow breathing animation */}
// <div className="hidden md:block absolute right-[320px] top-[80%] transform -translate-y-1/2 z-0">
//   <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-500 opacity-10 blur-[250px] animate-glow origin-left" />
// </div>

//            <div className='flex gap-10 mb-10'>
//             <div className='w-[50%] flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
//                 <img className='w-[20%] h-[full] object-cover' src={img} alt="" />
//                 <h2 className='text-white mt-2 text-xl'>ReactJs</h2>
//             </div>
//             <div className='w-[50%] flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
//                 <img className='w-[20%] h-[full] object-cover' src={img3} alt="" />
//                 <h2 className='text-white mt-2 text-xl'>Redux</h2>
//             </div>
//            </div>
//            <div className='flex gap-10'>
//               <div className='w-[50%] flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
//                 <img className='w-[20%] h-[full] object-cover' src={img1} alt="" />
//                 <h2 className='text-white mt-2 text-xl'>Nodejs</h2>
//             </div>
//               <div className='w-[50%] flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
//                 <img className='w-[20%] h-[full] object-cover' src={img2} alt="" />
//                 <h2 className='text-white mt-2 text-xl'>Tailwind css</h2>
//             </div>
//            </div>
//         </div>
//     </div>
<div id="home" className='w-full xl:h-[85vh] md:flex flex-col-reverse md:flex-row relative md:pt-32 pt-20 px-4'>
  {/* LEFT SIDE */}
  <div className='w-full md:w-1/2 text-white'>
    <h1 className='text-4xl md:text-5xl font-semibold mb-3'>Arun Yadav</h1>
    <h2 className='text-xl md:text-2xl text-gray-400 mb-6'>React Developer</h2>

    <div className='flex flex-col sm:flex-row gap-4 mb-5 text-gray-400'>
      <div className='flex items-center gap-2'>
        <i className="ri-mail-line"></i>
        <span>yarun4622@gmail.com</span>
      </div>
      <div className='flex items-center gap-2'>
        <i className="ri-map-pin-line"></i>
        <span>Bhopal, India</span>
      </div>
    </div>

    <div className='mb-8 md:mr-4'>
      <p className='text-gray-300 text-base md:text-[18px]'>
       Passionate React developer with hands-on experience in building responsive, user-friendly web apps using ReactJS, Tailwind CSS, Redux, and Node.js. Focused on creating clean UI and solving real-world problems through code.
      </p>
    </div>

    <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'>
      <div className='flex items-center gap-2 px-5 py-2 bg-white text-black rounded-md w-fit'>
        <i className="ri-download-line"></i>
        <h2>Resume</h2>
      </div>
      <div className='flex gap-3 mt-2 sm:mt-2'>

       <a
  href="https://github.com/Arunyadav46"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="text-xl ri-github-fill  border-2 border-gray-800 rounded-md px-4 py-2"></i>  </a>

        <a href="https://www.linkedin.com/in/arun-yadav-539606267/">
         <i className="text-xl ri-linkedin-fill border-2 border-gray-800 rounded-md px-4 py-2"></i>
        </a>
        

        
        <a
  href="https://wa.me/917354722929?text=Hi%2C%20I'm%20a%20React%20Developer%20actively%20looking%20for%20job%20opportunities.%20Let's%20connect%21"
  target="_blank"
  rel="noopener noreferrer"
>
  <i className="text-xl ri-whatsapp-line border-2 border-gray-800 rounded-md px-4 py-2"></i>
</a>

        <a href="tel:7354722929">
  <i className="text-xl ri-phone-line border-2 border-gray-800 rounded-md px-4 py-2"></i>
</a>
      </div>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className='w-full md:w-1/2 pt-8'>

    {/* Glowing effect (hidden on small screens) */}
    <div className="hidden md:block absolute right-[320px] top-[80%] transform -translate-y-1/2 z-0">
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-500 opacity-10 blur-[250px] animate-glow origin-left" />
    </div>

    {/* Skill Cards */}
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
        <img className='w-[30%] object-cover' src={img} alt="ReactJs" />
        <h2 className='text-white mt-2 text-lg'>ReactJs</h2>
      </div>
      <div className='flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
        <img className='w-[30%] object-cover' src={img3} alt="Redux" />
        <h2 className='text-white mt-2 text-lg'>Redux</h2>
      </div>
      <div className='flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
        <img className='w-[30%] object-cover' src={img1} alt="NodeJs" />
        <h2 className='text-white mt-2 text-lg'>NodeJs</h2>
      </div>
      <div className='flex flex-col justify-center items-center rounded-md h-[20vh] bg-[#1e1e2e]'>
        <img className='w-[30%] object-cover' src={img2} alt="Tailwind CSS" />
        <h2 className='text-white mt-2 text-lg'>Tailwind CSS</h2>
      </div>
    </div>
  </div>
</div>

  )
}

export default Hero