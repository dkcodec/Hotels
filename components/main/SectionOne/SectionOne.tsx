import Building from '@/public/Bulding.png'
import Image from 'next/image'
import { Borel } from 'next/font/google'
import { motion } from 'framer-motion'

import React from 'react'

const borel = Borel({ weight: '400', subsets: ['latin'] })

const SectionOne: React.FC = () => {
  return (
    <main className='grid items-center pl-6 pt-4 md:pl-24 md:grid-cols-2'>
      <div>
        <motion.div
          whileInView={{ translateX: 0 }}
          initial={{ translateX: '-100%' }}
          transition={{ ease: 'backInOut', duration: 0.5, delay: 0.2 }}
        >
          <h1 className='md:text-6xl text-3xl mb-6'>
            Hotel for{' '}
            <span className={`${borel.className} text-accent-second`}>
              memorable
            </span>
            <br />
            moments rich in emotions
          </h1>
        </motion.div>
        <motion.div
          whileInView={{ translateX: 0 }}
          initial={{ translateX: '-100%' }}
          transition={{ ease: 'linear', duration: 0.2, delay: 0.2 }}
        >
          <p className='font-light text-gray-400'>
            We have <span className='text-accent'>72128</span> hotels spread
            throughout world and we are still growing. We have the best offers
            for you.
          </p>
        </motion.div>
      </div>
      <div>
        <div className='overflow-hidden'>
          <motion.div
            whileInView={{ translateX: 0 }}
            initial={{ translateX: '100%' }}
            transition={{ ease: 'linear', duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={Building}
              alt='building'
              className=''
              priority={false}
              placeholder='empty'
            />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default React.memo(SectionOne)
