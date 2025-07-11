import React from 'react'

function Experience() {
  return (
    <div id="experience" className='w-full pt-20 mb-20'>
        {/* <h1 className='text-4xl text-white font-semibold'>Experience</h1> */}
           <section className="bg-[#11111b] text-white  py-16 font-sans">
      <h2 className="text-4xl font-bold text-teal-400">Experience</h2>
      <p className="text-gray-400 mt-2 mb-10 text-xl">
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
        <div className="ml-10 flex flex-col md:flex-row w-full  gap-8">
          {/* Left Column */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white">Frontend Developer Intern</h3>
            <p className="text-gray-400 text-sm mt-1">onpriceinfo.com</p>
            <p className="text-teal-400 text-sm mt-1">[ Feb 2025 - Present ]</p>
            <button className="xl:mt-36 xl:mx-[-50px] bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Checkout GitHub
            </button>
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 text-sm text-gray-300">
            <ul className="space-y-2 text-[17px]">
              <li>– Developed a real-time chat system using WebSockets and REST APIs, improving platform communication efficiency.</li>
              <li>– Refactored legacy codebase, increasing maintainability and reducing bug frequency by 60%.</li>
              <li>– Optimized database queries, reducing API response time by 30%.</li>
              <li>– Documented backend modules and API services, enhancing onboarding efficiency.</li>
              <li>– <span className="text-white font-medium">Tech Stack:</span> Node.js, Express.js, MongoDB, WebSockets, JWT, Postman, Git, GitHub, Jira.</li>
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