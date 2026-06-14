import React, { useRef } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { motion, useInView } from 'framer-motion'

function Experience() {
  const { isLightTheme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div id="experience" className='w-full xl:pt-20 xl:mb-20' ref={ref}>
      <section className={`py-16 font-sans ${
        isLightTheme ? 'bg-transparent text-gray-900' : 'bg-transparent text-white'
      }`}>
        <motion.h2 
          className={`text-4xl font-bold ${
            isLightTheme ? 'text-gray-900' : 'text-white'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="border-b-4 border-purple-600 pb-1">Experience</span>
        </motion.h2>
        <motion.p 
          className={`mt-8 mb-10 text-xl ${
            isLightTheme ? 'text-gray-600' : 'text-gray-400'
          }`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here's a quick rundown of my most recent experiences.
        </motion.p>

        <motion.div 
          className="relative flex"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Vertical line */}
          <motion.div 
            className={`absolute left-4 top-0 bottom-0 w-0.5 ${
              isLightTheme ? 'bg-gray-300' : 'bg-gray-700'
            }`}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Circle marker */}
          <motion.div 
            className={`relative z-10 w-8 h-8 flex items-center justify-center border-2 rounded-full ${
              isLightTheme ? 'bg-gray-50 border-gray-400' : 'bg-transparent border-gray-500'
            }`}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
            whileHover={{ scale: 1.2 }}
          >
            <div className={`w-2 h-2 rounded-full ${
              isLightTheme ? 'bg-gray-400' : 'bg-gray-500'
            }`} />
          </motion.div>

          {/* Main content */}
          <motion.div 
            className="xl:ml-10 ml-3 flex flex-col md:flex-row w-full gap-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Left Column */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 className={`text-xl font-semibold ${
                isLightTheme ? 'text-gray-900' : 'text-white'
              }`}>React.js Developer</h3>
              <p className={`text-sm mt-1 ${
                isLightTheme ? 'text-gray-600' : 'text-gray-400'
              }`}>NanoStack.io</p>
              <p className="text-teal-400 text-sm mt-1">[ 1 Year Experience ]</p>
            </motion.div>

            {/* Right Column */}
            <motion.div 
              className={`md:w-2/3 text-sm ${
                isLightTheme ? 'text-gray-700' : 'text-gray-300'
              }`}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <ul className="space-y-2 text-[17px]">
                {[
                  "– Project: Adam ERP (Enterprise Resource Planning System)",
                  "– Developed scalable ERP modules using React.js, Redux, and REST APIs, handling complex business workflows.",
                  "– Integrated and managed 100+ REST APIs using Axios with interceptors, ensuring secure, efficient, and scalable data communication across ERP modules.",
                  "– Implemented global state management using Redux, improving data consistency across multiple modules.",
                  "– Optimized application performance using useMemo, useCallback, and lazy loading, reducing unnecessary re-renders.",
                  "– Built and validated complex forms using Formik, including proper form state management and validations.",
                  "– Collaborated closely with testers to identify UI and functional issues, and fixed bugs reported during QA cycles.",
                  "– Worked with backend and QA teams to ensure smooth API integration, data consistency, and stable feature delivery.",
                  "– Tech Stack: React.js, Redux, REST APIs, Axios, Formik, JavaScript, Git, GitHub."
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  >
                    {item.includes("Tech Stack") ? (
                      <>
                        – <span className={`font-medium ${
                          isLightTheme ? 'text-gray-900' : 'text-white'
                        }`}>Tech Stack:</span> React.js, Redux, REST APIs, Axios, Formik, JavaScript, Git, GitHub.
                      </>
                    ) : item.includes("Project:") ? (
                      <>
                        – <span className={`font-medium ${
                          isLightTheme ? 'text-gray-900' : 'text-white'
                        }`}>Project:</span> Adam ERP (Enterprise Resource Planning System)
                      </>
                    ) : (
                      item
                    )}
                  </motion.li>
                ))}
              </ul>
              <motion.div 
                className="py-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <hr className={isLightTheme ? 'border-gray-300' : 'border-gray-600'} />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default Experience