'use client'
import Image from 'next/image'
import navLogo from '@/images/sam-logo-small.png'
import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuerry'
import { MenuIcon } from 'lucide-react'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import facebook from '@/images/icons/icons8-facebook (1).svg'
import threads from '@/images/icons/icons8-threads.svg'
import instagram from '@/images/icons/icons8-instagram-48.png'
import linkedin from '@/images/icons/icons8-linkedin.svg'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => setScrolled(window.scrollY > 50)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const isDesktop: boolean = useMediaQuery('(min-width: 768px)')
  return (
    <nav
      className={`fixed z-[9999] top-0 w-full ${scrolled ? 'bg-white shadow-md' : '-translate-y-20'} rounded-b-lg py-4 px-8 lg:px-16 flex flex-row justify-between items-center transition-all ease-in-out duration-300`}
    >
      <Link href={'/'}>
        <Image src={navLogo} alt="SAM Logo" className="h-10 w-9" />
      </Link>
      <div className="w-fit flex flex-row items-center gap-1">
        {!isDesktop ? (
          <Drawer direction="top">
            <DrawerTrigger>
              <MenuIcon className="w-6 h-6" />
            </DrawerTrigger>
            <DrawerContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-none">
                  <AccordionTrigger className="decoration-transparent">Rólunk</AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 pl-4">
                    <Link href="#about-1" className="text-lg">
                      Szolgáltatásunk
                    </Link>
                    <Link href="#about-2" className="text-lg">
                      Előnyök
                    </Link>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-none py-4">
                  <Link href="#pricing" className="text-lg font-medium">
                    Árak
                  </Link>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none py-4">
                  <Link href="#faq" className="text-lg font-medium">
                    FAQ
                  </Link>
                </AccordionItem>
              </Accordion>
              <div className="border-t border-primary-orange pt-4 flex flex-row justify-between h-fit w-full">
                <a href="/">
                  <Image src={facebook} alt="Social Icon" />
                </a>
                <a href="/">
                  <Image src={threads} alt="Social Icon" />
                </a>
                <a href="/">
                  <Image src={instagram} alt="Social Icon" />
                </a>
                <a href="/">
                  <Image src={linkedin} alt="Social Icon" />
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        ) : (
          <NavMenu />
        )}
      </div>
    </nav>
  )
}
