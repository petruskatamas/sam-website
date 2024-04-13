import Image from 'next/image'
import React, { ReactNode } from 'react'
import artwork from '@/images/artwork-6.webp'
import samLogo from '@/images/sam-logo-small.svg'

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="cursor-default hover:font-bold hover:pl-2 hover:text-primary-orange/90 transition-all ease-in-out duration-200">
      {children}
    </li>
  )
}

export const MainPagePros = () => {
  return (
    <div className="w-full h-screen bg-pros-hero bg-fixed bg-repeat">
      <div className="w-full h-full bg-black/30 backdrop-blur-lg flex justify-center items-center">
        <div className="w-full max-w-screen-lg h-3/4 bg-white shadow-xl rounded-lg p-10 flex flex-row">
          <div className="w-[55%] h-full flex flex-col gap-8 justify-center items-start">
            <h2 className="w-full border-b border-primary-orange pb-4 flex flex-row items-center gap-4">
              Mik a{' '}
              <Image
                src={samLogo}
                alt="SAM Logo"
                className="w-16 h-16 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
              />{' '}
              előnyei?
            </h2>
            <ul className="flex flex-col list-disc ml-4 text-base gap-2">
              <ListItem>Felhőalapú működés</ListItem>
              <ListItem>A megtakarított idő mérhető és költségben kimutatható</ListItem>
              <ListItem>Szerződésbe foglalva vállaljuk a szolgáltatás minőségét</ListItem>
              <ListItem>Szakértői háttértámogatást nyújtunk</ListItem>
              <ListItem>Az adatok tárolása megfelel a mai biztonsági elvárásoknak</ListItem>
              <ListItem>Az adattárolás szervere Magyarországon található</ListItem>
              <ListItem>A szerver energia ellátása garantált</ListItem>
              <ListItem>Rendelkezésre állási paraméter 99,9%</ListItem>
              <ListItem>Magas felügyeleti rendszerrel védett szerverközpont</ListItem>
              <ListItem>Napi adatmentés</ListItem>
              <ListItem>Gondoskodunk az optimális működési környezetről</ListItem>
            </ul>
          </div>
          <div className="w-[45%] h-full flex justify-center items-center pl-6">
            <Image src={artwork} alt="Artwork" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}