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
import img9 from "../assets/postman.png"

function Skills() {
  return (
    <div id="skill" className='w-full  pt-20'>
        <h1 className='text-4xl text-white font-semibold'>Skills</h1>
         <h2 className='text-center text-white text-3xl pt-20'>Tech Stack</h2>

         <div className='p-10'>
            <div className='pt-20 flex items-center gap-20'>
                <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img} alt="" />
                </div>
                <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img1} alt="" />
                </div>
                  
                 <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img2} alt="" />
                </div>
                 <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img3} alt="" />
                </div>
            </div>
         </div>
         <div className='p-10'>
            <div className=' flex items-center gap-20'>
                <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img6} alt="" />
                </div>
                <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img4} alt="" />
                </div>
                  
                 <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img5} alt="" />
                </div>
                 <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img7} alt="" />
                </div>
            </div>
         </div>
          <div className='p-10 '>
            <div className=' flex items-center gap-20'>
                <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img8} alt="" />
                </div>
                <div className='w-[20%] bg-[#12121E] flex items-center justify-center h-[28vh] border-2 border-gray-800 rounded-3xl'>
                    <img className='w-[60%] h-[60%]' src={img9} alt="" />
                </div>
                  
                
                
            </div>
         </div>
    
    </div>
  )
}

export default Skills