import Image from 'next/image'
import React, { ReactNode } from 'react'
// import artwork from '@/images/artwork-6.webp'
import samLogo from '@/images/sam-logo-small.svg'

const ListItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="w-full text-pretty cursor-default hover:font-bold hover:translate-x-2 hover:text-primary-orange/90 transition-all ease-in-out duration-200">
      {children}
    </li>
  )
}

export const MainPagePros = () => {
  return (
    <div
      id="about-2"
      className="scroll-mt-12 w-full h-fit lg:h-[120vh] bg-pros-hero bg-fixed bg-repeat"
    >
      <div className="w-full h-full bg-black/30 backdrop-blur-lg flex justify-center items-center py-8 px-4 md:px-8 lg:px-0 lg:py-0">
        <div className="group w-fit lg:w-full max-w-screen-lg h-3/4 bg-white shadow-xl rounded-lg p-6 lg:p-10 flex flex-col gap-8">
          <h2 className=" w-full border-b border-primary-orange pb-4 flex flex-row justify-center items-center gap-4">
            Mik a{' '}
            <Image
              src={samLogo}
              alt="SAM Logo"
              className="w-12 h-12 md:w-16 md:h-16 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
            />{' '}
            előnyei?
          </h2>
          <div className="w-full flex flex-row-reverse justify-between gap-4">
            <div className="w-full lg:w-1/2 h-full flex flex-col gap-8 justify-start items-start p-8 shadow-lg rounded-lg border-slate-200/50 border">
              <h3 className="text-xl">Technikai megoldások</h3>
              <ul className="flex flex-col list-disc ml-4 text-base gap-2 ">
                <ListItem>Felhőalapú működés.</ListItem>
                <ListItem>Szerződésbe foglalva vállaljuk a szolgáltatás minőségét.</ListItem>
                <ListItem>Szakértői háttértámogatást nyújtunk.</ListItem>
                <ListItem>Az adatok tárolása megfelel a mai biztonsági elvárásoknak.</ListItem>
                <ListItem>
                  Az adattárolás szervere Magyarországon <br />
                  található.
                </ListItem>
                <ListItem>Rendelkezésre állási paraméter 99,9%.</ListItem>
                <ListItem>Magas felügyeleti rendszerrel védett szerverközpont.</ListItem>
                <ListItem>Napi adatmentés.</ListItem>
                <ListItem>Valós könyvelői igények által fejlesztve.</ListItem>
                <ListItem>Fejlesztési észrevételek rugalmas kezelésének .</ListItem>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-col gap-8 justify-start items-start p-8 shadow-lg rounded-lg border-slate-200/50 border">
              <h3 className="text-xl">A mindennapi használat során.</h3>
              <ul className="flex flex-col list-disc ml-4 text-base gap-2">
                <ListItem>A megtakarított idő mérhető és költségben kimutatható.</ListItem>
                <ListItem>Dokumentumok átadása ellenőrzött körülmények között.</ListItem>
                <ListItem>
                  Minden könyvelt cég esetében azonos felületen történik a kommunikáció.
                </ListItem>
                <ListItem>Beérkezett és küldött dokumentumok ellenőrizhetők.</ListItem>
                <ListItem>Valamennyi feltöltött céges dokumentum azonnal elérhető.</ListItem>
                <ListItem>
                  Dokumentumok átadása után tisztán láthatók az elvégzendő feladatok.
                </ListItem>
                <ListItem>
                  NAV online felületéről érkező adatokkal történő gyors összevetés.
                </ListItem>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
