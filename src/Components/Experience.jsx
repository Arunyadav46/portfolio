import React from 'react'

function Experience() {
  return (
    <div id="experience" className='w-full xl:pt-20 xl:mb-20'>
        {/* <h1 className='text-4xl text-white font-semibold'>Experience</h1> */}
           <section className="bg-[#11111b] text-white  py-16 font-sans">
      <h2 className="text-4xl font-bold text-white">
    <span className="border-b-4 border-purple-600 pb-1">Experience</span>
  </h2>
      <p className="text-gray-400 mt-8 mb-10 text-xl">
        Here's a quick rundown of my most recent experiences.
      </p>

      <div className="relative flex">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />

        {/* Circle marker */}
        <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-[#11111b] border-2 border-gray-500 rounded-full">
          <div className="bg-gray-500 w-2 h-2 rounded-full" />
        </div>

        {/* Main content */}
        <div className="xl:ml-10 ml-3 flex flex-col md:flex-row w-full  gap-8">
          {/* Left Column */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
            <p className="text-gray-400 text-sm mt-1">onpriceinfo.com</p>
            <p className="text-teal-400 text-sm mt-1">[ Feb 2025 - Present ]</p>
            {/* <button className="xl:mt-36 xl:mx-[-50px] bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Checkout GitHub
            </button> */}
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 text-sm text-gray-300">
            <ul className="space-y-2 text-[17px]">
              <li>–  Developed and maintained responsive web pages using ReactJS and Tailwind CSS.</li>
              <li>– Rebuilt the DSTarena website using ReactJS and Tailwind CSS with improved UI/UX.</li>
              <li>–Integrated APIs with Axios and implemented features like form validation and referral systems.</li>
              <li>–Converted static templates into responsive React components.</li>
              <li>– Used Git and GitHub for version control and team collaboration.</li>
              <li>– <span className="text-white font-medium">Tech Stack:</span> ReactJS, Tailwind CSS, Axios, JavaScript, Git, GitHub Postman.</li>
            </ul>
            <div className="py-10">
            <hr className="border-gray-600" />
             </div>

            
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Experience