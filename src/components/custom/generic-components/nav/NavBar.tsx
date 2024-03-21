import Image from 'next/image'
import navLogo from '@/images/sam-logo-small.svg'
import React from 'react'
import NavMenu from './NavMenu'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { LogIn } from 'lucide-react'
export const NavBar = () => {
  return (
    <nav className="fixed z-[9999] top-0 w-full bg-white rounded-b-lg shadow-md py-4 px-16 flex flex-row justify-between items-center">
      <Link href={'/'}>
        <Image src={navLogo} alt="SAM Logo" className="h-10 w-10" />
      </Link>
      <div className="w-fit flex flex-row items-center gap-12">
        <NavMenu />
        <Button variant={'secondary'} className="flex flex-row items-center gap-4">
          Belépés
          <LogIn />
        </Button>
      </div>
    </nav>
  )
}
