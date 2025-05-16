import React from 'react'
import { motion } from 'framer-motion'

import MainText from '../components/MainText'
import Sphere3D from '../components/Sphere3D'
import ClientMarquee from '../components/ClientMarquee'
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation'
import SectionPill from '../components/SectionPill'
import CollapsableCard from '../components/CollapsableCard'
import SpotlightContainer from '../components/SpotlightContainer'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import Sphere3DMain from '../components/3D Spheres/Sphere3DMain'
import EllipseFiveVariant from '../components/3D Spheres/EllipseFiveVariant'
import Sphere3DTwoMainAxis from '../components/3D Spheres/Sphere3DTwoMainAxis'

import {
  ReactIcon,
  FlutterIcon,
  FirebaseIcon,
  NodeJsIcon,
  MongoDBIcon,
  ExpressJsIcon,
  PostgreSQLIcon,
  AntDesignIcon,
  TestimonialUserIcon
} from '../assets/Icons/Icons'


import {
  headingVariants,
  paragraphVariants,
  buttonVariants,
  testimonialCardVariants
} from '../utils/Animations'
import clientReviewData from '../utils/ClientReviewData'

import '../App.css'

import BannerImage1 from '../assets/662d719974811b48b7fe60c8_img1.png'
import BannerImage2 from '../assets/662d71997728968b7a441ece_img2.png'
import BannerImage3 from '../assets/662d75846e0e4feedf3fb769_img3.png'
import BannerImage4 from '../assets/662d7584977fb64c8704c1f4_img4.png'
import BannerImage5 from '../assets/662d758488062fffaf190cb8_img5.png'
import BannerImage6 from '../assets/662fadf359d329ab7374cfea_banner1.png'
import BannerImage7 from '../assets/662fadf33baedbbd9e018dbc_banner2.png'
import ReviewCards from '../components/ReviewCards'


const Home = () => {
  return (
    <div className='mx-auto flex flex-col gap-y-15 md:gap-y-25 lg:gap-y-25'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-30'>
        <div className='m-auto p-auto flex flex-col justify-start items-start gap-y-3 z-50!'>
          <motion.h1
            className='pb-2'
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Own the internet. Start with fast web hosting.
          </motion.h1>
          <motion.p
            variants={paragraphVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Up to 90% OFF Web Hosting Plans + Free SSL.
          </motion.p>
          <PrimaryButtonAnimation
            linkText='Get Started'
            link={'/sign-up'}
            animationStyle={'rounded-full! mouse-exit-origin'}
          />
        </div>
        <div className='z-1 relative flex justify-center items-center overflow-visible'>
          <div className='absolute z-0 w-[50em] h-[15em] md:h-[20em] top-[1em] md:top-[10em] -right-[10em] perspective-distant bg-blur-block blur-[160px]!'></div>
          <Sphere3DMain />
        </div>
      </section>
      <section className='grid grid-cols-1 gap-x-1 md:gap-x-3 lg:gap-x-3 mt-70 md:mt-10 lg:mt-5'>
        <div className='flex flex-col justify-center items-center gap-y-5 sm:gap-y-3'>
          <motion.p
            className='text-uppercase text-xs font-medium'
            variants={paragraphVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Trusted by content creators across the world
          </motion.p>
          <ClientMarquee />
        </div>
      </section>
      <section className='grid grid-cols-1 gap-x-5 gap-y-10'>
        <div className='flex flex-col justify-center items-center gap-y-2 max-w-xl mx-auto text-center text-wrap'>
          <SectionPill sectionTitle={'Features'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Craft Your Believable Future With Coreverse
          </motion.h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-5'>
          {/* Spotlight cards are come here */}
          <SpotlightContainer>
            <Spotlight3DCardEffect className='p-0 rounded-xl fl</Spotlight3DCardEffect>ex flex-col justify-between items-start gap-y-1'>
              <img src={BannerImage1} alt='banner-1' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto'/>
              <div className='flex flex-col justify-start items-start gap-y-2 px-4 pb-2'>
                <h4 className='max-w-50'>Smart Contract Automation</h4>
                <p className='max-w-90'>Nibh ante pellentesque eget. Nunc lectus amet sem purus accumsan. Amet sed pulvinar nibh et eget. Sed egestas ultrices et fringilla.</p>
              </div>
            </Spotlight3DCardEffect>
          </SpotlightContainer>
          <SpotlightContainer>
            <Spotlight3DCardEffect className='p-0 rounded-xl flex flex-col justify-between items-start gap-y-1'>
              <div className='flex flex-col justify-start items-start gap-y-2 px-4 pt-4 pb-0'>
                <h4 className='max-w-50'>Smart Contract Automation</h4>
                <p className='max-w-90 mb-0'>Ullamcorper mauris quis a urna tortor fermentum. Orci rhoncus sollicitudin sit diam mauris. Nulla laoreet sed at mattis rhoncus.</p>
              </div>
              <img src={BannerImage2} alt='banner-2' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto'/>
            </Spotlight3DCardEffect>
          </SpotlightContainer>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-5'>
          <SpotlightContainer>
            <Spotlight3DCardEffect className='h-100 p-0 rounded-xl flex flex-col justify-between items-start gap-y-1'>
              <img src={BannerImage3} alt='banner-3' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto'/>
              <div className='flex flex-col justify-start items-start gap-y-2 px-4 pb-2'>
                <h4 className='max-w-50'>Instant Transactions</h4>
                <p className='max-w-90'>Egestas ridiculus scelerisque parturient tellus ultrices a nisi est facilisi. Sed suspendisse id enim sagittis.</p>
              </div>
            </Spotlight3DCardEffect>
          </SpotlightContainer>
          <SpotlightContainer>
            <Spotlight3DCardEffect className='p-0 h-100 rounded-xl flex flex-col justify-between items-start gap-y-1'>
              <div className='flex flex-col justify-start items-start gap-y-2 px-4 pt-4 pb-0'>
                <h4 className='max-w-50'>Privacy-First</h4>
                <p className='max-w-90 mb-0'>Sed massa consequat eros vel. Urna sed tellus nibh maecenas ac rhoncus nisi at lorem. Egestas elit eget.</p>
              </div>
              <img src={BannerImage4} alt='banner-4' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto'/>
            </Spotlight3DCardEffect>
          </SpotlightContainer>
          <SpotlightContainer>
            <Spotlight3DCardEffect className='p-0 h-100 rounded-xl flex flex-col justify-between items-start gap-y-1'>
              <img src={BannerImage5} alt='banner-5' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto'/>
              <div className='flex flex-col justify-start items-start gap-y-2 px-4 pb-2'>
                <h4 className='max-w-50'>Decentralized</h4>
                <p className='max-w-90'>Imperdiet a consequat sodales eget non semper amet sagittis. Vitae vulputate nisi ornare sed nisl. Mi leo egestas.</p>
              </div>
            </Spotlight3DCardEffect>
          </SpotlightContainer>
        </div>
      </section>
      <section className='relative grid grid-cols-1 gap-x-1 gap-y-10 md:gap-x-20 lg:gap-x-20'>
        <div className='flex flex-col justify-start items-start gap-y-5 z-1'>
          <motion.h2
            className='max-w-2xl'
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Experience the future of Web Tech today
          </motion.h2>
          <motion.h2
            className='opacity-50 max-w-5xl'
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Explore our comprehensive suite of secure, transparent, and efficient web tech solutions
          </motion.h2>
          <PrimaryButtonAnimation
            linkText='Learn More'
            link={'/sign-up'}
            animationStyle={'rounded-full! mouse-exit-origin'}
          />
        </div>
        <div className='absolute z-0 w-[50em] h-[24em] -bottom-[4em] -left-[15em] -rotate-20 prespective-[1000px] bg-blur-block'></div>
      </section>
      <section
        className='grid grid-cols-2 grid-flow-row md:grid-cols-4 lg:grid-cols-4 gap-x-5 gap-y-10
        *:flex *:flex-col *:justify-center *:items-center'
      >
        <div className='col-span-2 md:col-span-4 lg:col-span-4 gap-y-2 max-w-xl mx-auto text-center text-wrap'>
          <SectionPill sectionTitle={'Tech Stacks'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Build using latest tech stacks
          </motion.h2>
        </div>
        {[
          { 
            icon: <ReactIcon width={45} height={45} />, 
            text: 'React' 
          },
          { 
            icon: <FlutterIcon width={45} height={45} />, 
            text: 'Flutter' 
          },
          { 
            icon: <FirebaseIcon width={45} height={45} />, 
            text: 'Firebase' 
          },
          { 
            icon: <NodeJsIcon width={45} height={45} />, 
            text: 'Node js' 
          },
          { 
            icon: <ExpressJsIcon width={45} height={45} />, 
            text: 'Express js' 
          },
          { 
            icon: <MongoDBIcon width={45} height={45} />, 
            text: 'Mongo DB' 
          },
          { 
            icon: <PostgreSQLIcon width={45} height={45} />, 
            text: 'Postgre SQL' 
          },
          { 
            icon: <AntDesignIcon width={45} height={45} />, 
            text: 'Ant Design' 
          },
        ].map((item, idx) => (
          <motion.div
            key={item.text}
            className='m-auto p-auto flex flex-col items-center'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            viewport='viewport'
          >
            <Spotlight3DCardEffect className='p-3 rounded-3xl'>
              {item.icon}
            </Spotlight3DCardEffect>
            <motion.h5
              className='mt-2'
              variants={headingVariants}
              initial='initial'
              whileInView='whileInView'
              viewport='viewport'
            >
              {item.text}
            </motion.h5>
          </motion.div>
        ))}
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-20'>
        <div className='flex flex-col justify-start items-start gap-y-2 text-wrap order-last md:order-first! lg:order-first! z-50!'>
          <SectionPill sectionTitle={'Interoperability'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Seamless optimization for efficiency & performance
          </motion.h2>
          <motion.p
            className='max-w-140'
            variants={paragraphVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Get more speed, better SEO, visitor retention and conversions with our
            custom-built WP optimization stack and LiteSpeed cache. A wide variety of tools to satisfy advanced
            user and website developer needs.
          </motion.p>
          <PrimaryButtonAnimation
            linkText='Learn More'
            link={'/sign-up'}
            animationStyle={'rounded-full! mouse-exit-origin'}
          />
        </div>
        <div className='relative flex justify-center items-center z-1 order-first md:order-last! lg:order-last! min-h-[26em]'>
          <div className='absolute z-0 w-[50em] h-[15em] md:h-[20em] top-[1em] -right-[10em] perspective-distant bg-blur-block blur-[160px]!'></div>
          <EllipseFiveVariant />
        </div>
      </section>
      <section className='grid grid-cols-1 auto-rows-auto gap-y-10'>
        <div className='flex flex-col justify-center items-center gap-y-2 max-w-2xl mx-auto text-center text-wrap'>
          <SectionPill sectionTitle={'Testimonials'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Read real reviews from our satisfied customers
          </motion.h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-5 lg:gap-x-5 gap-y-10'>
          <SpotlightContainer className='flex flex-col justify-start items-start gap-y-5'>
            {clientReviewData.slice(0, 2).map((review) => (
              <ReviewCards 
                id={review.id}
                reviewer={review.client_name}
                position={review.position}
                comment={review.comment}
              />
            ))}
          </SpotlightContainer>
          <SpotlightContainer className='flex flex-col justify-start items-start gap-y-5'>
            {clientReviewData.slice(2, 4).map((review) => (
              <ReviewCards
                id={review.id}
                reviewer={review.client_name}
                position={review.position}
                comment={review.comment}
              />
            ))}
          </SpotlightContainer>
          <SpotlightContainer className='flex flex-col justify-start items-start gap-y-5'>
            {clientReviewData.slice(4, 6).map((review) => (
              <ReviewCards
                id={review.id}
                reviewer={review.client_name}
                position={review.position}
                comment={review.comment}
              />
            ))}
          </SpotlightContainer>
        </div>
      </section>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-20 lg:gap-y-20'>
        <div className='relative flex justify-center items-center z-1 min-h-[25em]'>
          <Sphere3DTwoMainAxis />
          <div className='absolute z-0 w-[50em] h-[15em] md:h-[20em] top-[1em] -right-[10em] perspective-distant bg-blur-block blur-[200px]!'></div>
        </div>
        <div className='m-auto p-auto flex flex-col justify-start items-start gap-y-5'>
          <SectionPill sectionTitle={'Revolutionary'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Support Initiates Here
          </motion.h2>
          <motion.p
            variants={paragraphVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Reimagine your future with our innovative solutions tailored to your needs. Let us help you unlock new possibilities and achieve your goals with confidence
          </motion.p>
        </div>
      </section>
      <section className='m-auto p-auto flex flex-col justify-center items-center gap-y-5'>
        <div className='max-w-2xl text-center mb-3'>
          <SectionPill sectionTitle={'Faq'} />
          <motion.h2
            variants={headingVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
          >
            Get answers to common questions
          </motion.h2>
        </div>
        <CollapsableCard
          heading={'What is Nexus and how does it work?'}
          text={'Rutrum placerat condimentum eget diam erat et. Risus tellus euismod diam tristique pellentesque. Nec sodales nulla luctus eu ornare aliquam enim mauris. Ut velit malesuada.'}
        />
        <CollapsableCard
          heading={'What makes your products unique?'}
          text={'Tincidunt ultrices eu feugiat a egestas commodo vitae mauris. Commodo imperdiet iaculis in dictum volutpat. Enim diam nam ligula integer urna. Magna vitae orci malesuada volutpat. At gravida id libero vitae mattis libero arcu quis. Viverra enim.'}
        />
        <CollapsableCard
          heading={'How can I implement blockchain in my industry?'}
          text={'Aliquet id vestibulum metus amet hac cras volutpat id. Aliquam ut nec est sit vel in. Magna aliquam diam eu in. Ornare consequat vel tempus fusce nec egestas nunc.'}
        />
        <CollapsableCard
          heading={'Is blockchain technology secure?'}
          text={'Elit pellentesque tellus auctor maecenas. Fermentum nascetur pellentesque non vitae vestibulum gravida tellus lectus venenatis. Cum parturient tempor porta eleifend nibh. Faucibus nulla mauris ac urna. Faucibus augue pharetra tellus felis. Gravida quis massa.'}
        />
        <CollapsableCard
          heading={'How can blockchain benefit my business?'}
          text={'Iaculis convallis purus enim dapibus odio nibh. Massa est gravida risus suspendisse tellus magna. Arcu donec vitae tincidunt ullamcorper nec tempor tortor eget morbi.'}
        />
        <CollapsableCard
          heading={'What is blockchain technology?'}
          text={'Eu cursus tempor et suscipit tincidunt ultrices. Aenean urna odio dolor at sed integer ipsum fermentum quis. Eu venenatis ut et bibendum. Orci dapibus mattis.'}
        />
      </section>
      <section className='w-full h-full'>
        <SpotlightContainer>
          <Spotlight3DCardEffect className='p-5 rounded-xl'>
            <div className='flex flex-col justify-center items-center gap-y-3 max-w-2xl mx-auto text-center text-wrap'>
              <SectionPill sectionTitle={'Sign Up'} />
              <h2>Join Our Dev Tech Community Today!</h2>
              <p>Sapien eros purus a quis euismod elit. Ornare vitae nunc quis nunc curabitur.</p>
              <PrimaryButtonAnimation
                linkText='Get Started'
                link={'/sign-up'}
                animationStyle={'rounded-full! mouse-exit-origin'}
              />
            </div>
            <img src={BannerImage6} alt='banner-6' loading='lazy' className='absolute top-0 left-0 right-auto bottom-auto max-w-50 md:max-w-70 lg:max-w-90 -z-1'/>
            <img src={BannerImage7} alt='banner-7' loading='lazy' className='absolute top-auto left-auto right-0 bottom-0 max-w-50 md:max-w-70 lg:max-w-90 -z-1'/>
          </Spotlight3DCardEffect>
        </SpotlightContainer>
      </section>
    </div>
  )
}

export default Home
