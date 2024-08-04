import Image from 'next/image'
import React from 'react'

interface LineBlockItemProps {
  title: string
  img: string
  text: string
  subText: string
}

const LineBlockItem: React.FC<LineBlockItemProps> = ({
  title,
  img,
  text,
  subText,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <Image src={img} alt='icon' />
        <p className='ml-2 text-sm font-bold text-accent opacity-70'>{title}</p>
      </div>
      <p className='font-bold text-lg mt-2'>{text}</p>
      <p className='text-sm font-bold text-accent opacity-70 mt-2'>{subText}</p>
    </div>
  )
}

export default LineBlockItem
