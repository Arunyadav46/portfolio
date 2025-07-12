import React from 'react'

function Education() {
  return (
     <section className="bg-[#11111b] text-white">
       <h2 className="text-4xl font-bold text-white">
    <span className="border-b-4 border-purple-600 pb-1">Education</span>
  </h2>
      <p className="text-gray-400 mt-8 mb-10 text-sm">
        A brief overview of my academic background.
      </p>

      <div className="relative flex">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700" />

        {/* Marker */}
        <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-[#11111b] border-2 border-gray-500 rounded-full">
          <div className="bg-gray-500 w-2 h-2 rounded-full" />
        </div>

        {/* Main content */}
        <div className="xl:ml-10 ml-3 flex flex-col md:flex-row w-full gap-8">
          {/* Left Column */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-white">Bachelor of Technology (B.Tech)</h3>
            <p className="text-gray-400 text-sm mt-1">Sagar Institute of research and Technology Bhopal</p>
            <p className="text-teal-400 text-sm mt-1">[ 2021 - 2025 ]</p>
          </div>

          {/* Right Column */}
         <div className="md:w-2/3 text-sm text-gray-300">
  <ul className="space-y-2 text-[17px]">
    <li>– Branch: Electrical and Electronics Engineering (EEE).</li>
    {/* <li>– Built strong fundamentals in mathematics, logic design, and embedded systems.</li> */}
     <li>
  – Self-learned React developer with strong frontend skills and a working knowledge of backend systems, REST APIs, and integration workflows.
</li>

    <li>– CGPA: <span className="text-white font-medium">7.38 / 10</span></li>
  </ul>
  <div className='py-16 text-gray-100'>
    <hr />
  </div>
</div>
        </div>
      </div>
      <div className="hidden md:block absolute right-[520px] top-[500%] transform -translate-y-1/2 z-0">
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-pink-300 via-purple-500 to-blue-500 opacity-10 blur-[250px] animate-glow origin-left" />
    </div>
    </section>
  )
}

export default Education