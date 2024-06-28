import React from 'react'
import samLogo from '@/images/sam-logo-small.svg'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const PricingTabCard = ({
  condition,
  value,
  valueText
}: {
  condition: string
  value: string
  valueText: string
}) => {
  return (
    <div className="w-full flex flex-row justify-between items-center px-8 py-4 shadow-lg rounded-lg border-slate-200/50 border hover:border-transparent ring-[2px] ring-transparent hover:ring-primary-orange transition-all duration-300 ease-in-out">
      <h4 className="text-sm">{condition}</h4>
      <h4>
        <span className="italic font-medium text-primary-orange">{value}</span>
        {valueText}
      </h4>
    </div>
  )
}

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
          <div className="w-full flex flex-row flex-wrap items-center gap-4">
            <p className="text-sm text-center pb-4 border-b border-primary-orange">
              A Megrendelő által az Alkalmazás igényvételével nyújtott könyvelési szolgáltatást
              igénybe vevő Ügyfelek által havonta az Alkalmazásba feltöltött bizonylatok darabszáma
              alapján fizetendő bizonylatforgalom alapú díj
            </p>
            <PricingTabCard
              condition="1-25 darab bizonylat/hó esetén:"
              value="1.500,- Ft"
              valueText=" + ÁFA/hó/érintett Ügyfél"
            />
            <PricingTabCard
              condition="26-50 darab bizonylat/hó esetén:"
              value="2.000,- Ft"
              valueText=" + ÁFA/hó/érintett Ügyfél"
            />
            <PricingTabCard
              condition="51-100 darab bizonylat/hó esetén:"
              value="2.500,- Ft"
              valueText=" + ÁFA/hó/érintett Ügyfél"
            />
            <PricingTabCard
              condition="101-250 darab bizonylat/hó esetén:"
              value="3.500,- Ft"
              valueText=" + ÁFA/hó/érintett Ügyfél"
            />
            <PricingTabCard
              condition="251-500 darab bizonylat/hó esetén:"
              value="5.000,- Ft"
              valueText=" + ÁFA/hó/érintett Ügyfél"
            />
            <PricingTabCard
              condition="500 darabnál több bizonylat/hó esetén:"
              value="8.000,- Ft"
              valueText=" + ÁFA/hó/érintett Ügyfél"
            />
          </div>
        </TabsContent>
        <TabsContent value="office" className="w-full">
          <div className="w-full flex flex-row flex-wrap items-center gap-4">
            <p className="text-sm text-center pb-4 border-b border-primary-orange">
              A Megrendelő által az Alkalmazás igényvételével nyújtott könyvelési szolgáltatást
              igénybe vevő saját Ügyfelek darabszáma (könyvelt cégek) alapján fizetendő alapdíj:
            </p>
            <PricingTabCard
              condition="1-5 Ügyfél esetén:"
              value="12.500,- Ft"
              valueText=" + ÁFA/hó"
            />
            <PricingTabCard
              condition="6-10 Ügyfél esetén:"
              value="10.000,- Ft"
              valueText=" + ÁFA/hó"
            />
            <PricingTabCard
              condition="11-25 Ügyfél esetén:"
              value="8.000,- Ft"
              valueText=" + ÁFA/hó"
            />
            <PricingTabCard
              condition="26-100 Ügyfél esetén:"
              value="5.000,- Ft"
              valueText=" + ÁFA/hó"
            />
          </div>
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
        <div className="w-full md:w-1/3 h-full flex flex-col justify-center gap-6">
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
            <img
              src={samLogo.src}
              alt="SAM Logo"
              className="w-16 h-16 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
            />
            <div className="w-full h-[1px] bg-primary-orange" />
          </div>
        </div>
        <div className="w-full md:w-2/3 h-full flex justify-center items-center">
          <PricingTabs />
        </div>
      </div>
    </div>
  )
}
