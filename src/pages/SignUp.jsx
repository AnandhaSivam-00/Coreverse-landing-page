import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import SpotlightContainer from '../components/SpotlightContainer'
import SectionPill from '../components/SectionPill'

import { headingVariants, paragraphVariants } from '../utils/Animations';

import '../App.css'

import SignBanner from '../assets/sign_up_side_banner.webp'

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <section className='w-screen h-screen grid grid-cols-3 gap-x-10 overflow-x-hidden'>
      <div className='p-2'>
        <img 
          src={SignBanner}
          alt='Sign Up Banner'
          className='w-full h-full object-cover rounded-lg signup-img-banner'
        />
      </div>
      <div className='col-span-2 flex flex-col justify-center items-center mx-auto'>
        <SpotlightContainer className="w-full max-w-lg">
            <Spotlight3DCardEffect className="rounded-2xl p-12 flex flex-col justify-center items-center">
              <SectionPill sectionTitle='Sign up' />

              <motion.h2 
                className="text-center"
                variants={headingVariants}
                initial="initial"
                whileInView="whileInView"
                viewport='viewport'
              >
                Get Started
              </motion.h2>

              <motion.p 
                className="text-center text-wrap"
                variants={paragraphVariants}
                initial="initial"
                whileInView="whileInView"
                viewport='viewport'
              >
                Only pay for what you use, period. Start your 14-day free trial today
              </motion.p>

              <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0a1018] border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0a1018] border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="password" className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-3 bg-[#0a1018] border border-gray-800 rounded-lg text-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 px-4 mt-4 font-medium text-white rounded-lg! mouse-exit-origin"
                >
                  Submit
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <Link to="/login" className="font-medium">
                  Login
                </Link>
              </div>
            </Spotlight3DCardEffect>
          </SpotlightContainer>
      </div>
    </section>
  )
}

export default SignUp