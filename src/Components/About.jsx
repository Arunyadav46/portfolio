import React from 'react'

function About() {
  return (
    <div id="about" className='w-full xl:h-[60vh] '>
      <div className='flex pt-20 md:px-0 md:pt-0 gap-2'>
        {/* <div className='px-4 py-1 font-bold text-[14px] text-purple-800 border border-purple-800 rounded-full flex justify-center items-center'>01</div> */}
            <h2 className="text-4xl font-bold text-white text-center">
            <span className="border-b-4 border-purple-600 pb-1">About Me</span>
          </h2>
      </div>
        
            <section className=" text-white py-16">
      <div className="max-w-7xl  flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Side - About Text */}
        <div className="md:w-1/2 space-y-6 text-base md:text-lg leading-relaxed">
    
          <p>
            Hello! I'm <span className="text-blue-500 font-semibold">Arun Yadav</span>, a passionate frontend developer who enjoys designing sleek interfaces and building interactive web experiences.
          </p>
          <p className='text-justify'>
            My journey started during my first year of college, and since then, I've loved working on unique, user-focused applications. From portfolios to real-world client projects, I enjoy coding things from scratch and making designs come to life.
          </p>
          <p className='text-just'>
            I’m currently focused on learning, collaborating, and continuously pushing my skills to the next level.
          </p>
        </div>

        {/* Right Side - Code Card */}
         
         <div className="bg-[#0f172a]/70 backdrop-blur-md border border-blue-700 border-l-2 rounded-xl p-6 w-full max-w-xl shadow-md font-mono text-sm leading-relaxed">
    <pre className="whitespace-pre-wrap text-white">
<span className="text-blue-400">const</span> developer = {'{'}
  {"\n  "}<span className="text-blue-400">name</span>: <span className="text-green-400">"Arun Yadav"</span>,
  {"\n  "}<span className="text-blue-400">title</span>: <span className="text-green-400">"Frontend Developer"</span>,
  {"\n  "}<span className="text-blue-400">skills</span>: [<span className="text-green-400">"JavaScript", "ReactJS", "Tailwind CSS"</span>],
  {"\n  "}<span className="text-blue-400">tools</span>: [<span className="text-green-400">"VS Code", "Git", "GitHub", "Vercel"</span>],
  {"\n  "}<span className="text-blue-400">passion</span>: <span className="text-green-400">"Designing modern UIs & building responsive websites"</span>,
  {"\n  "}<span className="text-blue-400">motto</span>: <span className="text-green-400">"Code smart, design sharp"</span>
{"\n"};

{"\n\n"}<span className="text-blue-400">function</span> currentFocus() {'{'}
{"\n  "}<span className="text-blue-400">return</span> <span className="text-green-400">"Building my portfolio and real-world client projects"</span>;
{"\n"}
    </pre>
  </div>

      </div>
    </section>
    </div>
  )
}

export default About