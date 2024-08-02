'use client'
import Building from '@/public/Bulding.png'
import Image from 'next/image'
import { Borel } from 'next/font/google'
import { useEffect, useRef, useState, useCallback } from 'react'

const borel = Borel({ weight: '400', subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-[3000px]'>
      <main className='grid items-center pl-6 pt-4 md:pl-24 md:grid-cols-2'>
        <div>
          <h1 className='md:text-6xl text-3xl mb-6'>
            Hotel for{' '}
            <span className={`${borel.className} text-accent-second`}>
              memorable
            </span>
            <br />
            moments rich in emotions
          </h1>
          <p className=' font-light text-gray-400'>
            We have <span className='text-accent'>459</span> rooms spread
            throuout Indonesia with room standards equivalent to 5 star hotels.
          </p>
        </div>
        <div>
          <div className='animate-fade-in-right'>
            <Image
              src={Building}
              alt='building'
              className=''
              priority={false}
              placeholder='empty'
            />
          </div>
        </div>
      </main>
    </div>
  )
}
