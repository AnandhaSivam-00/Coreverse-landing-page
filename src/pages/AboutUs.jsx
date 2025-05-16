import React from 'react';

import SectionPill from '../components/SectionPill';
import SpotlightContainer from '../components/SpotlightContainer'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation';

import '../App.css'
import { 
  LeaderboardStarIcon,
  OptimizationIcon,
  LightBulbIcon,
  AcadamicCapIcon,
  VerticalAdjustIcon,
  CheckShieldIcon,
  LovableServiceIcon,
  ServicePersonIcon
} from '../assets/Icons/Icons';

import { motion } from 'framer-motion';
import {
  headingVariants,
  paragraphVariants,
  buttonVariants
} from '../utils/Animations';

const AboutUs = () => {
  return (
    <div className='mx-auto flex flex-col gap-y-25'>
      <section className='grid grid-cols-1 gap-x-5 gap-y-10'>
        <div className='flex flex-col justify-center items-center gap-y-5 sm: gap-y-3 mx-auto text-center text-wrap'>
          <SectionPill sectionTitle={'About Us'} />
          <motion.h1
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Welcome to Coreverse Technologies, where creativity, collaboration, and cutting-edge technology converge.
          </motion.h1>
        </div>
        <SpotlightContainer 
          className='mx-auto w-20/22 md:w-3xl lg:w-3xl flex flex-col justify-center items-center gap-y-5 text-wrap'
        >
          <Spotlight3DCardEffect>
            <p>
              We're passionate about harnessing the transformative power of creativity and technology in our product-based company.
              At Coreverse, we firmly believe that innovative design, alongside advanced technologies like SaaS solutions, can simplify
              communication, enhance experiences, and inspire people globally
            </p>
          </Spotlight3DCardEffect>
          <Spotlight3DCardEffect>
            <p>
              Understanding that strong relationships and effective design are founded on collaboration, we're eager to engage in a visual 
              dialogue with you, understand your unique needs, and leverage our expertise in technology to create exceptional products together.
            </p>
          </Spotlight3DCardEffect>
          <Spotlight3DCardEffect>
            <p>
              Let's embark on this journey of creativity, collaboration, and innovation with Coreverse Technologies.
            </p>
          </Spotlight3DCardEffect>
        </SpotlightContainer>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-8'>
        <div className='flex flex-col justify-start items-start gap-y-5 text-wrap'>
          <SectionPill sectionTitle={'Our Commitment'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Guided by Our Core Principles
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Our innovative solutions are meticulously crafted to streamline processes, optimize workflows, and drive growth. 
            With Coreverse, businesses can confidently navigate the ever-evolving landscape of technology, 
            ensuring seamless operations and sustainable success.
          </motion.p>
          <PrimaryButtonAnimation
            linkText='Join us now'
            link={'/sign-up'}
            animationStyle={'mouse-exit-origin rounded-full'}
          />
        </div>
        <div className='relative grid grid-cols-2 gap-x-5 md:gap-x-10 lg:gap-x-10 gap-y-10 mt-5'>
          {[
            {
              icon: <VerticalAdjustIcon width={44} height={44} />,
              text: 'We Probe Workspaces'
            },
            {
              icon: <LeaderboardStarIcon width={50} height={50} />,
              text: 'We Lead Technologically'
            },
            {
              icon: <OptimizationIcon width={45} height={45} />,
              text: 'We Optimize Resources'
            },
            {
              icon: <LightBulbIcon width={44} height={44} />,
              text: 'We Lead With Innovation'
            },
            {
              icon: <AcadamicCapIcon width={44} height={44} />,
              text: 'We Offer Tech Diversity'
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className='flex flex-row justify-start items-center gap-x-5'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.75 }}
              viewport='viewport'
            >
              {item.icon}
              <h6 className='mb-0!'>{item.text}</h6>
            </motion.div>
          ))}
          <div className='absolute z-0 bg-blur-block opacity-50'></div>
        </div>
      </section>
      <section className='grid grid-cols-1 gap-x-5 gap-y-15'>
        <div className='flex flex-col justify-center items-center gap-y-5 sm:gap-y-3 mx-auto text-center text-wrap'>
          <SectionPill sectionTitle={'Assurance'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            With Coreverse you can
          </motion.h2>
        </div>
        <div className='flex flex-row justify-center items-center flex-wrap gap-x-5 gap-y-10'>
          {[
            'Focus critical developer resources on your core business',
            'Launch new products faster with less payments code',
            'Improve conversion from international customers'
          ].map((text, idx) => (
            <motion.div
              key={idx}
              className='max-w-80 flex flex-col justify-center items-center gap-y-1 text-center text-wrap p-4 rounded-xl collapsable-card-items'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport='viewport'
            >
              <CheckShieldIcon width={35} height={35} />
              <p className='opacity-75'>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10'>
        <div className='flex flex-col justify-center items-center md:items-start lg:items-start gap-y-5 text-wrap'>
          <SectionPill sectionTitle={'Support'} />
          <motion.h3
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Technical or account support
          </motion.h3>
          <motion.p
            variants={paragraphVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            We’re here to help! If you have technical issues,
          </motion.p>
        </div>
        <div className='flex flex-row justify-center items-center gap-y-5 gap-x-5 md:gap-x-10 lg:gap-x-10'>
          <motion.div
            initial={{ x: -200, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, delay: 0.2 }}
            viewport='viewport'
          >
            <PrimaryButtonAnimation
              linkText='Contact Now'
              link={'/Contact-Us'}
              animationStyle={'mouse-exit-origin rounded-full'}
            />
          </motion.div>
          <motion.div
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: 1.25, opacity: 1 }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          >
            <LovableServiceIcon width={60} height={60} />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0.5 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3, delay: 0.2 }}
            viewport={{ once: false, amount: "some" }}
          >
            <PrimaryButtonAnimation
              linkText={<ServicePersonIcon width={25} height={25} />}
              link={'/Contact-Us'}
              animationStyle={'mouse-exit-origin rounded-full'}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;