import React from 'react'
import { motion } from 'framer-motion'
import { SwiperSlide } from 'swiper/react'

import SectionPill from '../components/SectionPill'
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation'
import SpotlightContainer from '../components/SpotlightContainer'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import ReviewCards from '../components/ReviewCards'
import CardSlider from '../components/CardSlider'

import image from '../assets/662d758488062fffaf190cb8_img5.png'
import bgImage from '../assets/662fadf359d329ab7374cfea_banner1.png'

import { serviceCardVariants } from '../utils/Animations'
import { CheckVariantIcon } from '../assets/Icons/Icons'
import { MonitorSmartphone, LayoutTemplate, Globe, Settings, Cuboid, Package } from 'lucide-react'

import clientReviewData from '../utils/clientReviewData.json'


const services = [
  {
    icon: <MonitorSmartphone className="text-blue-700 w-6 h-6" />,
    title: 'App Development',
    description:
      'Our App Development design service focuses on creating intuitive and engaging digital.',
  },
  {
    icon: <LayoutTemplate className="text-blue-700 w-6 h-6" />,
    title: 'Content Marketing',
    description:
      'Our Content Marketing design service focuses on creating intuitive and engaging digital.',
  },
  {
    icon: <Globe className="text-blue-700 w-6 h-6" />,
    title: 'Pay-Per-Click (PPC)',
    description:
      'Our Marketing Automation design service focuses on creating intuitive and engaging digital.',
  },
  {
    icon: <Settings className="text-blue-700 w-6 h-6" />,
    title: 'Marketing Automation',
    description:
      'Our Marketing Automation design service focuses on creating intuitive and engaging digital.',
  },
  {
    icon: <Cuboid className="text-blue-700 w-6 h-6" />,
    title: 'Brand Identity',
    description:
      'Our Marketing Automation design service focuses on creating intuitive and engaging digital.',
  },
  {
    icon: <Package className="text-blue-700 w-6 h-6" />,
    title: 'Web Development',
    description:
      'Our Marketing Automation design service focuses on creating intuitive and engaging digital.',
  },
]
const highlights = [
  'Comprehensive Service Overview.',
  'Intuitive Contact and Inquiry Forms.',
  'Data-Driven Performance Metrics.',
  'Interactive Service Pricing Options.',
]


const Service = () => {
  return (
    <div className="text-white px-4 md:px-6">
      <SpotlightContainer>
        <Spotlight3DCardEffect>
          {/* Spotlight Section */}
          <div>
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
              <div className="w-full h-full bg-gradient-radial from-purple-800 via-transparent to-black opacity-40" />
              <div
                className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-30 blur-3xl"
                style={{ backgroundImage: `url(${bgImage})` }}
              />
            </div>

            {/* Spotlight Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 flex flex-col md:flex-row items-center justify-between">
              {/* Text Content */}
              <div className="max-w-2xl text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-lg text-gray-300">
                  Every business has a story, and we’re here to tell yours through compelling digital solutions.
                </p>
              </div>

              {/* Character Image */}
              <div className="mt-10 md:mt-0 md:ml-12">
                <img
                  src={image}
                  alt="Character"
                  className="w-64 md:w-90 mx-auto"
                />
              </div>


            </div>

          </div>
        </Spotlight3DCardEffect>
      </SpotlightContainer>

      {/* Services List Section */}

      <div className="mt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          We Provide Best Service for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
            Your Brand.
          </span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-6 mt-10 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:scale-[1.01] transition"
              variants={serviceCardVariants}
              initial='initial'
              whileInView='whileInView'
              viewport='viewport'
            >
              {/* Left: Icon + Title */}
              <div className="flex items-center content-center space-x-4 h-15">
                <div className="w-10 h-12 p-2 rounded-full border border-white/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-0 font-semibold w-full md:w-50 lg:w-50">{service.title}</h3>
              </div>

              {/* Right: Description */}
              <p className="text-gray-300 text-base md:text-lg md:max-w-3xl leading-relaxed md:text-left md:pl-20">
                {service.description}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
      <div className='pt-20'>
        {/* Blurred Background Image */}

        <SpotlightContainer>
          <Spotlight3DCardEffect>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
              {/* Left Side */}
              <div className="max-w-xl text-center md:text-left -mt-2">
                <SectionPill sectionTitle={'Why Choose Us?'} />
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight pt-3">
                  Crafting Impactful <br />
                  Solutions{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
                    Tailored to You.
                  </span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Stay informed with our marketing insights blog, connect instantly
                  through live chat, and subscribe to our newsletter for regular updates. With mobile-first design, intuitive contact forms, and social proof.
                </p>
                <PrimaryButtonAnimation
                  linkText='Get Started'
                  link={'/sign-up'}
                  animationStyle={'rounded-full! mouse-exit-origin'}
                />
              </div>

              {/* Right Side */}
              <div className="w-full md:w-[45%] space-y-6">
                {highlights.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-row justify-start items-center bg-white/5 p-4 rounded-xl backdrop-blur-md"
                    variants={serviceCardVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport='viewport'
                  >
                    <CheckVariantIcon width={30} height={30} />
                    <p className="text-white font-medium text-lg ps-4 mb-0">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Years of Experience (Floating Bottom Left) */}
          </Spotlight3DCardEffect>
        </SpotlightContainer>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-16 gap-x-10 md:gap-x-5">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-10">
          <SectionPill sectionTitle={'Happy Customers'} />
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt.</p>
          <h4 className='text-8xl! font-medium'>25+</h4>
        </div>
        <div className="w-full md:w-[65%] space-y-6">
          <div className='pt-5'>
            <SpotlightContainer className='flex flex-col md:flex-row md:flex-wrap gap-6'>
              <CardSlider>
                {clientReviewData.slice(0, 5).map((review) => (
                  <SwiperSlide
                    key={review.id}
                    className='max-w-sm'
                  >
                    <ReviewCards 
                      id={review.id}
                      reviewer={review.client_name}
                      position={review.position}
                      comment={review.comment}
                      className='w-80 h-full'
                    />
                  </SwiperSlide>
                ))}
              </CardSlider>
            </SpotlightContainer>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Service