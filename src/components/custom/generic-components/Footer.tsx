import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import samLogo from '@/images/sam-logo.png'

const FooterListItem = ({ children, href }: { children: ReactNode; href: string }) => {
  return (
    <li className="cursor-default hover:font-bold hover:pl-2 hover:text-primary-orange/90 transition-all ease-in-out duration-200">
      <Link href={href}>{children}</Link>
    </li>
  )
}

export const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full border-t border-primary-orange max-w-screen-lg mx-auto flex flex-col">
        <div className="w-full py-10 flex flex-row-reverse justify-between">
          <div className="w-fit h-full flex flex-row justify-between items-center">
            <div className="w-full flex flex-row gap-10 items-center">
              <div className="w-[200px] flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
                <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
                  Rólunk
                </h4>
                <ul>
                  <FooterListItem href={'#'}>Szolgáltatásunk</FooterListItem>
                  <FooterListItem href={'#'}>Előnyök</FooterListItem>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
                <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
                  Árak
                </h4>
                <ul>
                  <FooterListItem href={'#'}>Könyvelőirodáknak</FooterListItem>
                  <FooterListItem href={'#'}>Cégeknek</FooterListItem>
                </ul>
              </div>
              <div className="w-[200px] flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
                <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
                  Segítség
                </h4>
                <ul>
                  <FooterListItem href={'#'}>FAQ</FooterListItem>
                  <FooterListItem href={'#'}>Integráció</FooterListItem>
                  <FooterListItem href={'#'}>Segédlet</FooterListItem>
                  <FooterListItem href={'#'}>Kapcsolat</FooterListItem>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[187px] flex flex-col justify-center items-center">
            <Image src={samLogo} alt="Simple Accounting Management" className="w-[270px]" />
          </div>
        </div>
        <div className="w-full py-4 border-t border-primary-orange flex justify-center items-center">
          <div className="flex flex-row gap-4 divide-x divide-slate-500">
            <Link href={'#'} className="text-sm hover:underline">
              ÁSZF
            </Link>
            <Link href={'#'} className="text-sm hover:underline pl-4">
              Adatvédelem
            </Link>
            <Link href={'#'} className="text-sm hover:underline pl-4">
              Felhasználási feltételek
            </Link>
            <Link href={'#'} className="text-sm hover:underline pl-4">
              Panaszkezelés
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-orange/90 h-10 flex justify-center items-center">
        <span className="text-sm text-white">
          Simple Accounting Management © 2024 Minden jog fenntartva
        </span>
      </div>
    </footer>
  )
}
