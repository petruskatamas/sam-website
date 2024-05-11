import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import samLogo from '@/images/sam-logo-small.svg'
import CompanyFormComponent from './CompanyFormComponent'
import OfficeFormComponent from './OfficeFormComponent'

const PricingTabs = () => {
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

export const MainPagePricing = () => {
  return (
    <div
      id="pricing"
      className="scroll-mt-12 w-full h-fit lg:h-[800px] py-16 lg:py-32 bg-white px-4 md:px-8 lg:px-0"
    >
      <div className="w-full h-full max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-24 items-start">
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center gap-6">
          <h2 className="border-b border-primary-orange pb-6">Árak</h2>
          <div className="w-full flex flex-col pt-6 gap-6">
            <p>
              Mind a könyvelőirodák, mind pedig a szolgáltatást használó cégek részére mérethez
              igazított előfizetési díjat biztosítunk. Ezzel is elősegítve a felesleges kiadások
              csökkentését.
            </p>
            <p>
              A személyre szabott díjak a rendszer használatát, és a feltöltött dokumentumok
              tárolását is magukban foglalják. Ezáltal kiváltható minden olyan infrastrukturális,
              vagy szolgáltatói platform, melyek eddig a keletkezett dokumentumok tárolására
              szolgáltak.
            </p>
          </div>
          <div className="flex flex-row justify-between gap-4 items-center">
            <div className="w-full h-[1px] bg-primary-orange" />
            <Image
              src={samLogo}
              alt="SAM Logo"
              className="w-16 h-16 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
            />
            <div className="w-full h-[1px] bg-primary-orange" />
          </div>
        </div>
        <div className="w-full md:w-1/2 h-full flex justify-center items-center">
          <PricingTabs />
        </div>
      </div>
    </div>
  )
}
