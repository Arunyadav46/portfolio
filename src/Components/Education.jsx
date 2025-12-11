import React, { useRef } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { motion, useInView } from 'framer-motion'

function Education() {
  const { isLightTheme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className={isLightTheme ? 'text-gray-900' : 'text-white'} ref={ref}>
      <motion.h2 
        className={`text-4xl font-bold ${
          isLightTheme ? 'text-gray-900' : 'text-white'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="border-b-4 border-purple-600 pb-1">Education</span>
      </motion.h2>
      <motion.p 
        className={`mt-8 mb-10 text-sm ${
          isLightTheme ? 'text-gray-600' : 'text-gray-400'
        }`}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        A brief overview of my academic background.
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

        {/* Marker */}
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
            }`}>Bachelor of Technology (B.Tech)</h3>
            <p className={`text-sm mt-1 ${
              isLightTheme ? 'text-gray-600' : 'text-gray-400'
            }`}>Sagar Institute of research and Technology Bhopal</p>
            <p className="text-teal-400 text-sm mt-1">[ 2021 - 2025 ]</p>
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
                "– Branch: Electrical and Electronics Engineering (EEE).",
                "– Self-learned React developer with strong frontend skills and a working knowledge of backend systems, REST APIs, and integration workflows.",
                "– CGPA: 7.38 / 10"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  {item.includes("CGPA") ? (
                    <>
                      – CGPA: <span className={`font-medium ${
                        isLightTheme ? 'text-gray-900' : 'text-white'
                      }`}>7.38 / 10</span>
                    </>
                  ) : (
                    item
                  )}
                </motion.li>
              ))}
            </ul>
            <motion.div 
              className={`py-16 ${
                isLightTheme ? 'text-gray-400' : 'text-gray-100'
              }`}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <hr className={isLightTheme ? 'border-gray-300' : 'border-gray-600'} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="hidden md:block absolute right-[520px] top-[500%] transform -translate-y-1/2 z-0"
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
    </section>
  )
}

export default Education