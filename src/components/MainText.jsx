import React from 'react';
import { motion } from 'framer-motion';

const MainText = ({ text }) => {
  return (
    <div className='w-full m-1 z-200 text-white'>
        {text.split('').map((letter, index) => {
            return (
                <motion.span
                    key={index} 
                    className='relative text-pretty'
                >
                    <motion.span
                        className='p-0 text-7xl font-bold tracking-wide'
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 0.15, 
                            delay: index * 0.05,
                        }}
                    >
                        { letter }
                    </motion.span>
                    <motion.span 
                        className='absolute inset-0 bg-neutral-500 h-5'
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 0.15,
                            delay: index * 0.05,
                            times: [0, 0.1, 1],
                            ease: 'easeInOut'
                        }}
                    />
                </motion.span>
            )
        })}
    </div>
  )
}

export default MainText