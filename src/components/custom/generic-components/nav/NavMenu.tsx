'use client'
import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import facebook from '@/images/icons/icons8-facebook (1).svg'
import threads from '@/images/icons/icons8-threads.svg'
import instagram from '@/images/icons/icons8-instagram-48.png'
import linkedin from '@/images/icons/icons8-linkedin.svg'

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Rólunk</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] grid-cols-[.7fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                    <h2 className="text-base font-medium leading-none">Kövess minket!</h2>
                    <div className="grid grid-cols-2 gap-2 h-fit w-fit">
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
              <ListItem href="#about-1" title="Miért a SAM?">
                Milyen problémákra nyújt megoldást a SAM?
              </ListItem>
              <ListItem href="#about-2" title="Használati előnyök">
                Ismerkedj meg a SAM-el!
              </ListItem>
              <ListItem href="#about-2" title="Technikai megoldások">
                Miért a SAM a tökéletes választás?
              </ListItem>
              <ListItem href="#they-said" title="Rólunk mondták" className="">
                Ügyfeleink véleménye
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Árak</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#faq" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>FAQ</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Kapcsolat
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
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
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
