import React, { useState, useCallback, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import SearchWhite from '@/public/icons/search-white.svg'
import CheckIn from '@/public/icons/Check-in.svg'
import CheckOut from '@/public/icons/Check-out.svg'
import Location from '@/public/icons/Location.svg'
import User from '@/public/icons/User.svg'

import LineBlockItem from './LineBlockItem'

interface SearchState {
  location: string
  guests: string
  checkIn: string
  checkOut: string
}

const LineBlock: React.FC = () => {
  const [searchState, setSearchState] = useState<SearchState>({
    location: '',
    guests: '',
    checkIn: '',
    checkOut: '',
  })

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setSearchState((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    },
    []
  )

  const handleSubmit = useCallback(async () => {
    try {
      console.log('Search data:', searchState)
    } catch (error) {
      console.error('Error submitting search data', error)
    }
  }, [searchState])

  const searchItems = useMemo(
    () => [
      {
        title: 'Location',
        img: Location,
        name: 'location',
        placeholder: 'Enter location',
      },
      {
        title: 'Guests',
        img: User,
        name: 'guests',
        placeholder: 'Enter guests',
      },
      {
        title: 'Check-in',
        img: CheckIn,
        name: 'checkIn',
        placeholder: 'Enter check-in date',
        type: 'date',
      },
      {
        title: 'Check-out',
        img: CheckOut,
        name: 'checkOut',
        placeholder: 'Enter check-out date',
        type: 'date',
      },
    ],
    []
  )

  return (
    <div className='flex justify-end overflow-hidden'>
      <motion.div
        whileInView={{ translateX: 0 }}
        initial={{ translateX: '100%' }}
        transition={{ ease: 'linear', duration: 0.5, delay: 0.2 }}
      >
        <div className='bg-[#555555] md:flex items-center justify-end p-5 md:rounded-l-[55px] w-fit md:pl-20'>
          <div className='grid md:grid-cols-4 grid-cols-2 gap-8 md:mr-20'>
            {searchItems.map((item) => (
              <LineBlockItem
                key={item.name}
                title={item.title}
                img={item.img}
                value={searchState[item.name as keyof SearchState]}
                placeholder={item.placeholder}
                name={item.name}
                onChange={handleInputChange}
                type={item.type}
              />
            ))}
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className='flex md:flex-col items-center justify-center bg-accent md:mr-20 rounded-2xl mt-5 md:mt-0 md:p-5 p-4 md:m-5'
            >
              <Image src={SearchWhite} alt='search' width={25} height={25} />
              <p className='md:text-sm font-light ml-5 md:ml-0 mt-0 md:mt-1'>
                search
              </p>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default React.memo(LineBlock)
