import React, { useRef, useState } from 'react'
import { useTheme } from '../Context/ThemeContext'
import { motion, useInView } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
function Contact() {
  const { isLightTheme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    emailjs
      .sendForm(
        'service_vvwqlsj',     // Your Service ID
        'template_kwh1l7k',    // Your Template ID
        form.current,
        'F7iCpjTkE01d-t4Jr'    // Your Public Key
      )
      .then(
        (res) => {
          console.log(res)
          setLoading(false);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('Email sending error:', error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className={`py-16 px-3 xl:px-6 ${
      isLightTheme ? 'text-gray-900' : 'text-white'
    }`} ref={ref}>
      <motion.h2 
        className={`text-4xl font-bold xl:mb-32 text-center ${
          isLightTheme ? 'text-gray-900' : 'text-white'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className="border-b-4 border-purple-600 pb-1">Get In Touch</span>
      </motion.h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
       
        {/* Left Side - Contact Info */}
        <motion.div 
          className='pt-20'
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="pb-1">Let's Talk</span>
          </h2>
          <p className={`mb-8 ${
            isLightTheme ? 'text-gray-600' : 'text-gray-300'
          }`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            {[
              { icon: FaEnvelope, label: "Email", value: "yarun4622@gmail.com", link: null },
              { icon: FaMapMarkerAlt, label: "Location", value: "Bhopal, India", link: null },
              { icon: FaLinkedin, label: "LinkedIn", value: "linkedin.com/in/arun-yadav-539606267/", link: "https://www.linkedin.com/in/arun-yadav-539606267/" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <item.icon className="text-purple-700 text-xl mt-1" />
                <div>
                  <p className={`text-sm ${
                    isLightTheme ? 'text-gray-500' : 'text-gray-400'
                  }`}>{item.label}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div 
          className={`rounded-xl p-8 shadow-md ${
            isLightTheme ? 'bg-gray-100' : 'bg-[#111111]'
          }`}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className={`block text-sm font-medium mb-1 ${
            isLightTheme ? 'text-gray-900' : 'text-white'
          }`}>Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 ${
              isLightTheme 
                ? 'bg-white text-gray-900 border-gray-300' 
                : 'bg-[#1f1f1f] text-white border-gray-700'
            }`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${
            isLightTheme ? 'text-gray-900' : 'text-white'
          }`}>Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700 ${
              isLightTheme 
                ? 'bg-white text-gray-900 border-gray-300' 
                : 'bg-[#1f1f1f] text-white border-gray-700'
            }`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-1 ${
            isLightTheme ? 'text-gray-900' : 'text-white'
          }`}>Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className={`w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-700 ${
              isLightTheme 
                ? 'bg-white text-gray-900 border-gray-300' 
                : 'bg-[#1f1f1f] text-white border-gray-700'
            }`}
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? 'Sending...' : <>
            <FaPaperPlane />
            Send Message
          </>}
        </motion.button>
        {success && (
          <motion.p 
            className="text-green-400 text-sm text-center mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Message sent successfully!
          </motion.p>
        )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact