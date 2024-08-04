import Image from 'next/image'
import React from 'react'

interface LineBlockItemProps {
  title: string
  img: string
  value: string
  placeholder: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
}

const LineBlockItem: React.FC<LineBlockItemProps> = ({
  title,
  img,
  value,
  placeholder,
  name,
  onChange,
  type,
}) => {
  return (
    <div className='flex flex-col'>
      <div className='flex h-[24px] items-center'>
        <Image src={img} alt='icon' />
        <p className='ml-2 text-sm font-bold text-accent opacity-70'>{title}</p>
      </div>
      <input
        required
        className='font text-lg mt-2 bg-transparent border-b-2 border-accent focus:outline-none'
        type={type ? type : 'text'}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        min={new Date().toISOString().split('T')[0]}
      />
    </div>
  )
}

export default LineBlockItem
