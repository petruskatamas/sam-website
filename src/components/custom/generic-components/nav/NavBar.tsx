import Image from 'next/image'
import navLogo from '@/images/sam-logo-small.svg'
import React from 'react'
import NavMenu from './NavMenu'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white py-4 px-10 flex flex-row justify-between items-center">
      <Link href={'/'}>
        <Image src={navLogo} alt="SAM Logo" className="h-10 w-10" />
      </Link>
      <NavMenu />
    </nav>
  )
}
