import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import samLogo from '@/images/sam-logo.png'

export const MainPageHero = () => {
  return (
    <div className="w-full h-screen bg-main-hero bg-fixed bg-cover bg-center">
      <div className="flex flex-col justify-center items-start w-full h-full max-w-screen-lg mx-auto">
        <div className="w-fit flex flex-col items-start gap-4 max-w-[400px]">
          <Image
            src={samLogo}
            alt="Simple Accounting Manager"
            className="w-full animate-fade-right animate-duration-[800ms] animate-ease-in-out"
          />
          <p className="text-lg leading-[24px] tracking-tight pb-2 animate-fade-right animate-duration-[800ms] animate-delay-[250ms] animate-ease-in-out">
            A rugalmas és gyors szolgáltatás biztosításához elengedhetetlen a jó &quot;látás&quot;
            és a tökéletes kommunikáció, ebben semgít a SAM!
          </p>
          <div className="gap-3 flex justify-start animate-fade-right animate-duration-[800ms] animate-delay-[500ms] animate-ease-in-out">
            <Button size={'lg'} variant={'secondary'}>
              Tudj meg többet!
            </Button>
            <Button size={'lg'} variant={'outline'}>
              Regisztrálj!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
