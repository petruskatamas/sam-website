import React from 'react'
import CompanyFormComponent from './CompanyFormComponent'
import OfficeFormComponent from './OfficeFormComponent'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import samLogo from '@/images/sam-logo-small.svg'

const ContactTabs = () => {
  return (
    <div className="w-full h-fit">
      <Tabs
        defaultValue="office"
        className="w-full h-full flex flex-col justify-between items-center gap-6"
      >
        <TabsList>
          <TabsTrigger value="office">KÖNYVELŐIRODÁK RÉSZÉRE</TabsTrigger>
          <TabsTrigger value="company">CÉGEK RÉSZÉRE</TabsTrigger>
        </TabsList>
        <TabsContent value="company" className="w-full">
          <CompanyFormComponent />
        </TabsContent>
        <TabsContent value="office" className="w-full">
          <OfficeFormComponent />
        </TabsContent>
      </Tabs>
    </div>
  )
}

const MainPageContact = () => {
  return (
    <div
      id="contact"
      className="scroll-mt-12 w-full h-fit lg:h-fit py-16 lg:py-32 bg-white px-4 md:px-8 lg:px-0"
    >
      <div className="relative w-full h-full max-w-screen-lg mx-auto flex flex-col md:flex-row-reverse justify-between gap-16 md:gap-24 items-start">
        <div className="relative md:sticky top-0 md:top-32 w-full md:w-1/4 h-fit flex flex-col justify-center gap-6">
          <h2 className="border-b border-primary-orange pb-6">Kapcsolat</h2>
          <div className="w-full flex flex-col pt-6 gap-6">
            <p>
              Kérjük, töltse ki az alábbi űrlapot, és munkatársaink a lehető leghamarabb felveszik
              Önnel a kapcsolatot. A kérdések megválaszolásával segíthet nekünk egy személyre
              szabott ajánlat kialakításában.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="w-full h-[1px] bg-primary-orange" />
            <Image
              src={samLogo}
              alt="SAM Logo"
              className="w-8 h-8 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
            />
            <div className="w-full h-[1px] bg-primary-orange" />
          </div>
        </div>
        <div className="w-full md:w-3/4 h-full flex justify-center items-center">
          <ContactTabs />
        </div>
      </div>
    </div>
  )
}

export default MainPageContact
