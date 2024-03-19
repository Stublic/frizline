'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function Header() {

  const [top, setTop] = useState<boolean>(true)

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-[#13072E] backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="#about" className="font-medium text-[#efa9fa] hover:text-[#3F2182] px-5 py-3 flex items-center transition duration-150 ease-in-out">Što je Frizline?</Link>
              </li>
              <li>
                <Link href="#pricing" className="font-medium text-[#efa9fa] hover:text-[#3F2182] px-5 py-3 flex items-center transition duration-150 ease-in-out">Paketi</Link>
              </li>
              <li>
                <Link href="#form" className="btn sm:w-auto hover:text-[#3F2182] hover:bg-[#efa9fa] bg-[#3F2182] text-[#efa9fa] ml-3">
                  <span>Započni uz 1 mjesec besplatno!</span>
                  
                </Link>
              </li>
            </ul>

          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
