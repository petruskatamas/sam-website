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
import Image from 'next/image'
import facebook from '@/images/icons/icons8-facebook (1).svg'
import threads from '@/images/icons/icons8-threads.svg'
import instagram from '@/images/icons/icons8-instagram-48.png'
import linkedin from '@/images/icons/icons8-linkedin.svg'

const pricesMenu: { title: string; href: string; description: string }[] = [
  {
    title: 'Könyvelőirodák részére',
    href: '/docs/primitives/alert-dialog',
    description: 'Lépjen velünk kapcsolatba, hogy ügyfelei könyvelései is új szintre léphessenek!'
  },
  {
    title: 'Cégek részére',
    href: '/docs/primitives/hover-card',
    description: 'Kezelje cége könyvelését könnyedén!'
  }
]

const helpMenu: { title: string; href: string; description: string }[] = [
  {
    title: 'FAQ',
    href: '/docs/primitives/alert-dialog',
    description: 'Gyakran ismételt kérdések'
  },
  {
    title: 'Integráció',
    href: '/docs/primitives/hover-card',
    description: 'Segiítség a már meglévő könyvelőprogramjának integrálásához'
  },
  {
    title: 'Oktatás',
    href: '/docs/primitives/hover-card',
    description: 'Webinárium, letölthető anyagok, oktató videók'
  }
]

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Rólunk</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.7fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="w-full h-full flex flex-col justify-center items-center gap-2">
                    <h2 className="text-base font-medium leading-none">Kövess minket!</h2>
                    <div className="grid grid-cols-2 gap-2 h-fit w-fit">
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
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Szolgáltatásunk">
                Ismerkedj meg a SAM-el!
              </ListItem>
              <ListItem href="/docs/installation" title="Előnyök">
                Miért a SAM a tökéletes választás?
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Árak</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[500px]">
              {pricesMenu.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Segítség</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[500px] ">
              {helpMenu.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
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
