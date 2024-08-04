'use client'
import React from 'react'
import SectionOne from '@/components/main/SectionOne/SectionOne'
import LineBlock from '@/components/main/SectionOne/LineBlock/LineBlock'

const Home = () => {
  return (
    <div className='h-[3000px]'>
      <SectionOne />
      <LineBlock />
    </div>
  )
}

export default React.memo(Home)
