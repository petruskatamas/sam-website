'use client'
import navLogo from '@/images/sam-logo-small.png'
import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks/useMediaQuerry'
import { MenuIcon } from 'lucide-react'
import facebook from '@/images/icons/icons8-facebook (1).svg'
import threads from '@/images/icons/icons8-threads.svg'
import instagram from '@/images/icons/icons8-instagram-48.png'
import linkedin from '@/images/icons/icons8-linkedin.svg'
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { NavigationMenu } from '@/components/ui/navigation-menu'
import { useWindowSize } from '@/hooks/useWindowSize'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = () => setScrolled(window.scrollY > 50)
  const mobileNavMenuWidth = useWindowSize()
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
        <img src={navLogo.src} alt="SAM Logo" className="h-10 w-9" />
      </Link>
      <div className="w-fit flex flex-row items-center gap-1">
        {!isDesktop ? (
          <NavigationMenu className="list-none">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <MenuIcon className="w-6 h-6" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul
                  className={`grid gap-3 p-6 w-[${mobileNavMenuWidth.width - 64}px] lg:grid-cols-[.7fr_1fr]`}
                >
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-row gap-4 h-fit w-fit">
                          <a href="https://www.facebook.com/profile.php?id=61553716456220">
                            <img src={facebook.src} alt="Social Icon" />
                          </a>
                          <a href="/">
                            <img src={threads.src} alt="Social Icon" />
                          </a>
                          <a href="/">
                            <img src={instagram.src} alt="Social Icon" />
                          </a>
                          <a href="/">
                            <img src={linkedin.src} alt="Social Icon" />
                          </a>
                        </div>
                      </div>
                    </NavigationMenuLink>
                  </li>
                  <ListItem
                    className="w-full flex justify-center"
                    href="#about-1"
                    title="Szolgáltatásunk"
                  />
                  <ListItem
                    className="w-full flex justify-center"
                    href="#about-2"
                    title="Előnyök"
                  />
                  <ListItem className="w-full flex justify-center" href="#pricing" title="Árak" />
                  <ListItem className="w-full flex justify-center" href="#faq" title="FAQ" />
                  <ListItem
                    className="w-full flex justify-center"
                    href="#contact"
                    title="Kapcsolat"
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenu>
        ) : (
          <NavMenu />
        )}
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-orange hover:text-white focus:bg-primary-orange focus:text-white',
              className
            )}
            {...props}
          >
            <div className="text-xl font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
