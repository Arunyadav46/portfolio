import React from 'react'
import { useTheme } from '../Context/ThemeContext'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function About() {
  const { isLightTheme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div id="about" className='w-full xl:h-[60vh] ' ref={ref}>
      <motion.div 
        className='flex pt-20 md:px-0 md:pt-0 gap-2'
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-4xl font-bold text-center ${
          isLightTheme ? 'text-gray-900' : 'text-white'
        }`}>
          <span className="border-b-4 border-purple-600 pb-1">About Me</span>
        </h2>
      </motion.div>
        
      <section className={`py-16 ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
        <div className="max-w-7xl flex flex-col md:flex-row items-center gap-10">
          
          {/* Left Side - About Text */}
          <motion.div 
            className="md:w-1/2 space-y-6 text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello! I'm <span className="text-blue-500 font-semibold">Arun Yadav</span>, a passionate React frontend developer who loves crafting sleek interfaces and building interactive, user-friendly web experiences.
            </motion.p>
            <motion.p 
              className='text-justify'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              As an Electrical and Electronics Engineering student, I started coding in 3rd year out of passion. Since then, I've built responsive web apps using ReactJS and Tailwind CSS—proving consistency matters more than background.
            </motion.p>
            <motion.p 
              className='text-just'
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I'm currently focused on learning, collaborating, and continuously pushing my skills to the next level.
            </motion.p>
          </motion.div>

          {/* Right Side - Code Card */}
          <motion.div 
            className={`backdrop-blur-md border border-blue-700 border-l-2 rounded-xl p-6 w-full max-w-xl shadow-md font-mono text-sm leading-relaxed ${
              isLightTheme ? 'bg-gray-100/70' : 'bg-[#0f172a]/70'
            }`}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, borderColor: isLightTheme ? '#9333ea' : '#a855f7' }}
          >
    <pre className={`whitespace-pre-wrap ${isLightTheme ? 'text-gray-900' : 'text-white'}`}>
<span className="text-blue-400">const</span> developer = {'{'}
  {"\n  "}<span className="text-blue-400">name</span>: <span className="text-green-400">"Arun Yadav"</span>,
  {"\n  "}<span className="text-blue-400">title</span>: <span className="text-green-400">"React Frontend Developer"</span>,
  {"\n  "}<span className="text-blue-400">skills</span>: [<span className="text-green-400">"JavaScript", "ReactJS", "Tailwind CSS"</span>],
  {"\n  "}<span className="text-blue-400">tools</span>: [<span className="text-green-400">"VS Code", "Git", "GitHub", "Vercel"</span>],
  {"\n  "}<span className="text-blue-400">passion</span>: <span className="text-green-400">"Designing modern UIs & building responsive websites"</span>,
  {"\n  "}<span className="text-blue-400">motto</span>: <span className="text-green-400">"Code smart, design sharp"</span>
{"\n"};

{"\n\n"}<span className="text-blue-400">function</span> currentFocus() {'{'}
{"\n  "}<span className="text-blue-400">return</span> <span className="text-green-400">"Building my portfolio and real-world client projects"</span>;
{"\n"}
    </pre>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About