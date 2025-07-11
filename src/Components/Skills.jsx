import React from 'react'
import img from "../assets/react.svg"
import img1 from "../assets/tailwind.png"
import img2 from "../assets/nodej.png"
import img3 from "../assets/js.svg"
import img4 from "../assets/html.svg"
import img5 from "../assets/css.svg"
import img6 from "../assets/redux.svg"
import img7 from "../assets/git.svg"
import img8 from "../assets/github.svg"
import img9 from "../assets/postman1.svg"

function Skills() {
 
  const techNames = [
  "Reactjs",
  "Tailwind",
  "NodeJS",
  "JavaScript",
  "Redux",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Postman"
];
  
  return (
    // <div id="skill" className='w-full  md:pt-20'>
    //      <h2 className="text-4xl font-bold text-white ">
    //         <span className="border-b-4 border-purple-600 pb-1">Skills</span>
    //       </h2>
    //      <h2 className='text-center font-semibold text-white text-3xl pt-20'>Tech Stack</h2>

    //      <div className='p-10'>
    //         <div className='pt-20 flex items-center gap-20'>
    //             <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img} alt="" />
    //             </div>
    //             <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img1} alt="" />
    //             </div>
                  
    //              <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img2} alt="" />
    //             </div>
    //              <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img3} alt="" />
    //             </div>
    //         </div>
    //      </div>
    //      <div className='p-10'>
    //         <div className=' flex items-center gap-20'>
    //             <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img6} alt="" />
    //             </div>
    //             <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img4} alt="" />
    //             </div>
                  
    //              <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img5} alt="" />
    //             </div>
    //              <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img7} alt="" />
    //             </div>
    //         </div>
    //      </div>
    //       <div className='p-10 '>
    //         <div className=' flex items-center gap-20'>
    //             <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img8} alt="" />
    //             </div>
    //             <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
    //                 <img className='w-[60%] h-[60%]' src={img9} alt="" />
    //             </div>
                  
    //         </div>
    //      </div>
    
    // </div>

    <div id="skill" className='w-full md:pt-20'>
  <h2 className="text-4xl font-bold text-white">
    <span className="border-b-4 border-purple-600 pb-1">Skills</span>
  </h2>
  
  <h2 className='text-center font-extrabold text-white text-3xl pt-10 mb-16'>Tech Stack</h2>

  {/* Just updated mobile widths */}
  {/* <div className='xl:p-5 flex flex-wrap justify-center gap-5 xl:gap-10 pt-10'>
    {[img, img1, img2, img3, img6, img4, img5, img7, img8, img9].map((image, i) => (
      <div
        key={i}
        className='w-[90%] sm:w-[40%] md:w-[22%] xl:w-[18%] h-[22vh] bg-[#12121E] border-2 border-gray-800 rounded-3xl flex items-center justify-center'
      >
        <img className='w-[60%] h-[60%] object-contain' src={image} alt={`skill-${i}`} />
      </div>
    ))}
  </div> */}
   {/* Glowing effect (hidden on small screens) */}
    <div className="hidden md:block absolute right-[520px] top-[250%] transform -translate-y-1/2 z-0">
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-500 opacity-10 blur-[250px] animate-glow origin-left" />
    </div>
  <div className='xl:p-5 flex flex-wrap justify-center gap-5 xl:gap-10 pt-10'>
  {[img, img1, img2, img3, img6, img4, img5, img7, img8, img9].map((image, i) => (
    <div
      key={i}
      className='group relative w-[90%] sm:w-[40%] md:w-[22%] xl:w-[18%] h-[22vh] bg-[#12121E] border-2 border-gray-800 rounded-3xl flex items-center justify-center overflow-hidden'
    >
      {/* Hover Overlay Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-white font-semibold text-lg">{techNames[i]}</span>
      </div>

      {/* Tech Image */}
      <img
        className='w-[60%] h-[60%] object-contain z-10'
        src={image}
        alt={`skill-${i}`}
      />
    </div>
  ))}
</div>
</div>

  )
}

export default Skills