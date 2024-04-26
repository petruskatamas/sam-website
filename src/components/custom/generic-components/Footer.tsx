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
      <div className="w-full border-t border-primary-orange max-w-screen-lg mx-auto flex flex-col px-8 lg:px-0 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-10">
          <div className="h-[187px] flex flex-col justify-center items-center">
            <Image src={samLogo} alt="Simple Accounting Management" className="w-[270px]" />
          </div>
          <div className="w-full h-fit flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
            <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
              Rólunk
            </h4>
            <ul>
              <FooterListItem href={'#'}>Szolgáltatásunk</FooterListItem>
              <FooterListItem href={'#'}>Előnyök</FooterListItem>
            </ul>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
            <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">Árak</h4>
            <ul>
              <FooterListItem href={'#'}>Könyvelőirodáknak</FooterListItem>
              <FooterListItem href={'#'}>Cégeknek</FooterListItem>
            </ul>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
            <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
              Segítség
            </h4>
            <ul>
              <FooterListItem href={'#'}>FAQ</FooterListItem>
              <FooterListItem href={'#'}>Integráció</FooterListItem>
              <FooterListItem href={'#'}>Segédlet</FooterListItem>
            </ul>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
            <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
              Kapcsolat
            </h4>
            <ul>
              <FooterListItem href={'#'}>info@samaccounting.com</FooterListItem>
              <FooterListItem href={'#'}>+36 20 XXX XXXX</FooterListItem>
              <FooterListItem href={'#'}>Simple Accounting Management Kft.</FooterListItem>
            </ul>
          </div>
          <div className="w-full h-fit flex flex-col gap-4 shadow-lg p-4 rounded-lg border border-slate-100">
            <h4 className="w-full text-lg font-medium border-b border-primary-orange pb-3">
              Dokumentumok
            </h4>
            <ul>
              <FooterListItem href={'#'}>ÁSZF</FooterListItem>
              <FooterListItem href={'#'}>Adatvédelem</FooterListItem>
              <FooterListItem href={'#'}>Panaszkezelés</FooterListItem>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary-orange/90 h-10 flex justify-center items-center">
        <span className="text-sm text-white px-16">
          Simple Accounting Management © 2024 Minden jog fenntartva
        </span>
      </div>
    </footer>
  )
}
