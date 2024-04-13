'use client'
import Image from 'next/image'
import navLogo from '@/images/sam-logo-small.png'
import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import Link from 'next/link'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => setScrolled(window.scrollY > 50)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  return (
    <nav
      className={`fixed z-[9999] top-0 w-full ${scrolled ? 'bg-white shadow-md' : '-translate-y-20'} rounded-b-lg py-4 px-16 flex flex-row justify-between items-center transition-all ease-in-out duration-300`}
    >
      <Link href={'/'}>
        <Image src={navLogo} alt="SAM Logo" className="h-10 w-9" />
      </Link>
      <div className="w-fit flex flex-row items-center gap-1">
        <NavMenu />
      </div>
    </nav>
  )
}
