'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from '../../public/Logo.svg'
import Link from 'next/link'
import MenuIcon from '../../public/iocns/Burger.svg'

interface LinksProps {
  text: string
  url: string
}

const links: LinksProps[] = [
  { text: 'Places', url: '/places' },
  { text: 'About us', url: '/about' },
  { text: 'Contact', url: '/contact' },
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='bg-[#3333336b] md:bg-transparent'>
      <div className='ml-5 mr-5 pt-2 pb-2 md:ml-20 md:mr-20 flex justify-between items-center'>
        <Link href='/'>
          <Image className=' w-[80px] md:w-[100px]' alt='Logo' src={Logo} />
        </Link>
        <div className='hidden md:flex space-x-20'>
          {links.map((el) => (
            <Link className='text-white' href={el.url} key={el.url}>
              {el.text}
            </Link>
          ))}
        </div>
        <div className='md:hidden'>
          <Image
            src={MenuIcon}
            alt='menu'
            width={36}
            height={36}
            onClick={handleMenuToggle}
          />
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4 flex flex-col space-y-4 items-center'>
          {links.map((el) => (
            <Link className='text-white' href={el.url} key={el.url}>
              {el.text}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default NavBar
