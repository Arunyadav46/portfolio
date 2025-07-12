import React, { useRef, useState } from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
function Contact() {
 
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
    <section id="contact" className="text-white py-16 px-3 xl:px-6">
         <h2 className="text-4xl font-bold xl:mb-32 text-center">
            <span className="border-b-4 border-purple-600 pb-1">Get In Touch</span>
          </h2>
      <div className="max-w-7xl mx-auto  grid md:grid-cols-2 gap-12">
       
        {/* Left Side - Contact Info */}
        <div className='pt-20'>
          <h2 className="text-3xl font-bold mb-4">
            <span className="pb-1">Let's Talk</span>
          </h2>
          <p className="text-gray-300 mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-purple-700 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">yarun4622@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-purple-700 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Bhopal, India</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaLinkedin className="text-purple-700 text-xl mt-1" />
              <div>
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/arun-yadav-539606267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:underline"
                >
                  linkedin.com/in/arun-yadav-539606267/
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        {/* <div className="bg-[#111111] rounded-xl p-8 shadow-md">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 bg-[#1f1f1f] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-[#1f1f1f] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows="5"
                placeholder="Your message"
                className="w-full px-4 py-2 bg-[#1f1f1f] text-white border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div> */}

        <div className="bg-[#111111] rounded-xl p-8 shadow-md">
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-1 text-white">Name</label>
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-2 bg-[#1f1f1f] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">Email</label>
          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-2 bg-[#1f1f1f] text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-white">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="w-full px-4 py-2 bg-[#1f1f1f] text-white border border-gray-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-700"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 transition"
        >
          {loading ? 'Sending...' : <>
            <FaPaperPlane />
            Send Message
          </>}
        </button>
        {success && (
          <p className="text-green-400 text-sm text-center mt-2">Message sent successfully!</p>
        )}
      </form>
    </div>
      </div>
    </section>
  )
}

export default Contact