'use client'
import React from 'react'
import Building from '@/public/Bulding.png'
import Image from 'next/image'
import { Borel } from 'next/font/google'
import { motion } from 'framer-motion'
import { useState } from 'react'

import SearchWhite from '@/public/icons/search-white.svg'
import SearchBlack from '@/public/icons/search-gray.svg'

const borel = Borel({ weight: '400', subsets: ['latin'] })

const Home = () => {
  const [searchState, setSearchState] = useState({
    isVisible: false,
    isFilled: false,
    inputValue: '',
  })

  const toggleSearchVisibility = () => {
    setSearchState((prevState) => ({
      ...prevState,
      isVisible: !prevState.isVisible,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchState((prevState) => ({
      ...prevState,
      inputValue: value,
      isFilled: value !== '',
    }))
  }

  return (
    <div className='h-[3000px]'>
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
              We have <span className='text-accent'>459</span> rooms spread
              throughout Indonesia with room standards equivalent to 5 star
              hotels.
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
      <div className='bg-[#555555] flex items-center justify-end'>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-8 mr-20'>
          <div className=''>asdasd</div>
          <div className=''>asdasd</div>
          <div className=''>asdasd</div>
          <div className=''>asdasd</div>
        </div>
        <div>
          {searchState.isVisible ? (
            <motion.form
              className={`flex bg-white rounded-3xl pl-2 pr-2 m-5 ${
                searchState.isFilled
                  ? 'border-accent border-2 transition-all'
                  : ''
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type='text'
                value={searchState.inputValue}
                onChange={handleInputChange}
                placeholder="Let's find place..."
                className='text-background rounded-full pl-2 pr-2 outline-none'
              />
              <button type='submit'>
                <Image src={SearchBlack} alt='search' />
              </button>
            </motion.form>
          ) : (
            <button
              onClick={toggleSearchVisibility}
              className='flex flex-col items-center justify-center bg-accent mr-20 rounded-2xl p-5 m-5'
            >
              <Image src={SearchWhite} alt='search' width={25} height={25} />
              <p className='text-sm font-light'>search</p>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home)
