import React from 'react'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

import SearchWhite from '@/public/icons/search-white.svg'
import SearchBlack from '@/public/icons/search-gray.svg'
import CheckIn from '@/public/icons/Check-in.svg'
import CheckOut from '@/public/icons/Check-out.svg'
import Location from '@/public/icons/Location.svg'
import User from '@/public/icons/User.svg'

import LineBlockItem from './LineBlockItem'

const LineBlock: React.FC = () => {
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
    <div className='flex justify-end overflow-hidden'>
      <motion.div
        whileInView={{ translateX: 0 }}
        initial={{ translateX: '100%' }}
        transition={{ ease: 'linear', duration: 0.5, delay: 0.2 }}
      >
        <div className='bg-[#555555] flex items-center justify-end rounded-l-[55px] w-fit pl-20'>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-8 mr-20'>
            <LineBlockItem
              title='Location'
              img={Location}
              text='Jammu & Kashmir'
              subText='Jammu district'
            />
            <LineBlockItem
              title='Guests'
              img={User}
              text='3 Person'
              subText='2 Adult, 1 Child'
            />
            <LineBlockItem
              title='Check-in'
              img={CheckIn}
              text='24 July 2024'
              subText='Select date'
            />
            <LineBlockItem
              title='Check-out'
              img={CheckOut}
              text='28 July 2024'
              subText='Select date'
            />
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
      </motion.div>
    </div>
  )
}

export default React.memo(LineBlock)
