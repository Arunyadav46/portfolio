import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { motion } from 'framer-motion'
import img from "../assets/react.svg"
import img1 from "../assets/nextjs.svg"
import img2 from "../assets/typescript.svg"
import img3 from "../assets/redux.svg"

function Hero() {
  const { isLightTheme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };
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
<motion.div 
  id="home" 
  className='w-full xl:h-[85vh] md:flex flex-col-reverse md:flex-row relative md:pt-32 pt-20 px-4'
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {/* LEFT SIDE */}
  <motion.div 
    className={`w-full md:w-1/2 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}
    variants={itemVariants}
  >
    <motion.h1 
      className='text-4xl md:text-5xl font-semibold mb-3 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent'
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Arun Yadav
    </motion.h1>
    <motion.h2 
      className={`text-xl md:text-2xl mb-3 ${isLightTheme ? 'text-gray-600' : 'text-gray-400'}`}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      React Developer
    </motion.h2>
    <motion.div
      className={`inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full text-sm ${
        isLightTheme ? 'bg-emerald-50 text-emerald-700' : 'bg-emerald-500/10 text-emerald-400'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
      </span>
      Open to work
    </motion.div>

    <motion.div 
      className={`flex flex-col sm:flex-row gap-4 mb-5 ${isLightTheme ? 'text-gray-600' : 'text-gray-400'}`}
      variants={itemVariants}
    >
      <motion.div 
        className='flex items-center gap-2'
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <i className="ri-mail-line"></i>
        <span>yarun4622@gmail.com</span>
      </motion.div>
      <motion.div 
        className='flex items-center gap-2'
        whileHover={{ scale: 1.05, x: 5 }}
      >
        <i className="ri-map-pin-line"></i>
        <span>Bhopal, India</span>
      </motion.div>
    </motion.div>

    <motion.div 
      className='mb-8 md:mr-4'
      variants={itemVariants}
    >
      <p className={`text-base md:text-[18px] ${isLightTheme ? 'text-gray-700' : 'text-gray-300'}`}>
       I'm a Frontend Developer with hands-on experience building responsive and user-friendly web applications using React.js, Next.js, TypeScript, and Redux Toolkit. I also have basic knowledge of DevOps and a strong focus on creating clean UI and solving real-world problems through code.
      </p>
    </motion.div>

    <motion.div 
      className='flex flex-col sm:flex-row gap-4 items-start sm:items-center'
      variants={itemVariants}
    >
      <motion.a
        href="/Arun_Yadav_Resume.pdf"
        download="Arun_Yadav_Resume.pdf"
        className={`cta-shine flex items-center gap-2 px-5 py-2 rounded-md w-fit shadow-lg shadow-purple-500/20 ${
          isLightTheme ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <i className="ri-download-line"></i>
        <h2>Resume</h2>
      </motion.a>
      <div className='flex gap-3 mt-2 sm:mt-2'>
        {[
          { href: "https://github.com/Arunyadav46", icon: "ri-github-fill" },
          { href: "https://www.linkedin.com/in/arun-yadav-539606267/", icon: "ri-linkedin-fill" },
          { href: "https://wa.me/917354722929?text=Hi%2C%20I'm%20a%20React%20Developer%20actively%20looking%20for%20job%20opportunities.%20Let's%20connect%21", icon: "ri-whatsapp-line" },
          { href: "tel:7354722929", icon: "ri-phone-line" }
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target={social.href.startsWith('http') ? '_blank' : undefined}
            rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
          >
            <i className={`text-xl ${social.icon} border-2 rounded-md px-4 py-2 transition-colors duration-300 ${
              isLightTheme
                ? 'border-gray-300 text-gray-900 hover:border-purple-500 hover:text-purple-600'
                : 'border-gray-800 text-white hover:border-purple-400 hover:text-purple-300'
            }`}></i>
          </motion.a>
        ))}
      </div>
    </motion.div>
  </motion.div>

  {/* RIGHT SIDE */}
  <motion.div 
    className='w-full md:w-1/2 pt-8'
    variants={itemVariants}
  >
    {/* Glowing effect (hidden on small screens) */}
    <motion.div 
      className="hidden md:block absolute right-[320px] top-[80%] transform -translate-y-1/2 z-0"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-500 opacity-10 blur-[250px] origin-left" />
    </motion.div>

    {/* Skill Cards */}
    <div className='grid grid-cols-2 gap-4'>
      {[
        { img: img, name: "ReactJs" },
        { img: img3, name: "Redux" },
        { img: img1, name: "Next.js" },
        { img: img2, name: "TypeScript" }
      ].map((skill, index) => (
        <motion.div
          key={index}
          className={`flex flex-col justify-center items-center rounded-md h-[20vh] border transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
            isLightTheme ? 'bg-gray-100 border-gray-200' : 'bg-[#1e1e2e] border-white/5'
          }`}
          variants={cardVariants}
          whileHover="hover"
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.1 }}
        >
          <motion.img 
            className='w-[30%] object-cover' 
            src={skill.img} 
            alt={skill.name}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          />
          <h2 className={`mt-2 text-lg ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
            {skill.name}
          </h2>
        </motion.div>
      ))}
    </div>
  </motion.div>
</motion.div>

  )
}

export default Hero