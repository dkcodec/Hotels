'use client'
'use client'

import Image from 'next/image'
import React, { useState, useCallback, useMemo } from 'react'
import Logo from '../../public/Logo.svg'
import Link from 'next/link'
import MenuIcon from '../../public/icons/Burger.svg'
import { Button } from '../ui/button'
import { usePathname } from 'next/navigation'
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs'

interface LinksProps {
  text: string
  url: string
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const path = usePathname()

  const handleMenuToggle = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const links: LinksProps[] = useMemo(
    () => [
      { text: 'Places', url: '/places' },
      { text: 'About us', url: '/about' },
      { text: 'Contact', url: '/contact' },
    ],
    []
  )

  return (
    <div className='bg-transparent sticky top-0 w-full backdrop-blur-lg z-50'>
      <div className='ml-5 mr-5 pt-2 pb-2 md:ml-20 md:mr-20 flex justify-between items-center'>
        <Link href='/'>
          <Image className='w-[80px] md:w-[100px]' alt='Logo' src={Logo} />
        </Link>
        <div className='hidden md:flex space-x-20 items-center'>
          {links.map((el) => (
            <Link
              className={`hover:text-accent transition-all duration-300 ${
                path === el.url ? 'text-accent' : 'text-white'
              }`}
              href={el.url}
              key={el.url}
            >
              {el.text}
            </Link>
          ))}

          <SignedOut>
            <SignInButton>
              <Button className='bg-accent w-[137px] text-white rounded-lg hover:bg-transparent hover:border hover:border-accent transition-all duration-300'>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div className='md:hidden'>
          <Image
            src={MenuIcon}
            alt='menu'
            width={36}
            height={36}
            onClick={handleMenuToggle}
            className='cursor-pointer'
          />
        </div>
      </div>
      {isOpen && (
        <div className='md:hidden mt-4 pb-8 flex flex-col space-y-4 items-center'>
          {links.map((el) => (
            <Link
              className={`${path === el.url ? 'text-accent' : 'text-white'}`}
              href={el.url}
              key={el.url}
            >
              {el.text}
            </Link>
          ))}
          <>
            <SignedOut>
              <SignInButton>
                <Button className='bg-accent w-[137px] text-white rounded-lg hover:bg-transparent hover:border hover:border-accent transition-all duration-300'>
                  Login
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </>
        </div>
      )}
    </div>
  )
}

export default React.memo(NavBar)
