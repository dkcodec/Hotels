'use client'
import React, { useCallback } from 'react'
import ArrowUp from '../../public/icons/arrow-up.svg'
import Image from 'next/image'

interface NameAndLink {
  name: string
  link: string
}

interface LinkSectionProps {
  title: string
  items: NameAndLink[]
}

const LinkSection: React.FC<LinkSectionProps> = React.memo(
  ({ title, items }) => (
    <div>
      <h6 className='font-openbold text-accent-second'>{title}</h6>
      <ul>
        {items.map((item) => (
          <li key={item.name} className='py-2 text-sm font-openregular'>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  )
)

const Footer: React.FC = () => {
  const services: NameAndLink[] = [
    { name: 'Room Booking', link: 'https://link.com' },
    { name: 'Conference Rooms', link: 'https://link.com' },
    { name: 'Dining Services', link: 'https://link.com' },
    { name: 'Spa Services', link: 'https://link.com' },
  ]

  const aboutUs: NameAndLink[] = [
    { name: 'About Our Hotel', link: 'https://link.com' },
    { name: 'Customer Reviews', link: 'https://link.com' },
    { name: 'Our Blog', link: 'https://link.com' },
    { name: 'Career Opportunities', link: 'https://link.com' },
  ]

  const help: NameAndLink[] = [
    { name: 'Contact Us', link: 'https://link.com' },
    { name: 'FAQ', link: 'https://link.com' },
    { name: 'Support Center', link: 'https://link.com' },
  ]

  const policies: NameAndLink[] = [
    { name: 'Privacy Policy', link: 'https://link.com' },
    { name: 'Terms of Service', link: 'https://link.com' },
    { name: 'Cancellation Policy', link: 'https://link.com' },
  ]

  const socialMedia: NameAndLink[] = [
    { name: 'Instagram', link: 'https://link.com' },
    { name: 'Facebook', link: 'https://link.com' },
    { name: 'LinkedIn', link: 'https://link.com' },
    { name: 'Twitter', link: 'https://link.com' },
  ]

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-1 gap-8 text-[#22222]'>
      <div>
        <h1 className='w-full text-2xl font-openlight text-white'>
          Make your stay memorable.
        </h1>
      </div>
      <div className='lg:col-span-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8'>
        <LinkSection title='Our Services' items={services} />
        <LinkSection title='About Us' items={aboutUs} />
        <LinkSection title='Help' items={help} />
        <LinkSection title='Policies' items={policies} />
        <LinkSection title='Follow Us' items={socialMedia} />
      </div>
      <div className='md:flex justify-between items-center'>
        <ul className='md:flex text-accent-second'>
          <li className='pr-4 text-sm md:pb-0 pb-4'>
            <a href='https://policy.com'>Privacy Policy</a>
          </li>
          <li className='pr-4 text-sm md:pb-0 pb-4'>
            <a href='https://policy.com'>Cookie Policy</a>
          </li>
          <li className='text-sm md:pb-0 pb-4'>
            <a href='https://policy.com'>Terms of Service</a>
          </li>
        </ul>
        <div className='pt-4 md:pt-0 flex items-center'>
          <button
            onClick={scrollToTop}
            className='md:ml-2 border border-accent rounded-full md:p-5 p-3 w-10 h-10 md:w-14 md:h-14 items-center'
          >
            <Image src={ArrowUp} alt='arrow' loading='lazy' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Footer)
