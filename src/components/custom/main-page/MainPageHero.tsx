import React from 'react'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import samLogo from '@/images/sam-logo.png'
import appleLogo from '@/images/app-store.png'
import playStoreLogo from '@/images/robot.png'
import appleQR from '@/images/apple-sam-qr.png'
import androidQR from '@/images/android-sam-qr.png'
import { ArrowDownIcon, LogIn } from 'lucide-react'

interface HeroCradInterface {
  name: string
  link: string
  qrCode: StaticImageData
  image: StaticImageData
  tooltip: string
}

const HeroCard = ({ name, link, qrCode, image, tooltip }: HeroCradInterface) => {
  return (
    <a href={link} className="relative group">
      <div className="relative z-[2] w-[200px] p-6 flex flex-col items-center gap-6 rounded-lg shadow-2xl bg-white border-slate-200 border-2">
        <Image src={image} alt={name} className="w-[60px] h-[65px]" />
        <Image src={qrCode} alt={`QR Code - ${name}`} className="w-full" />
      </div>
      <div className="absolute z-[1] -translate-y-16 group-hover:-translate-y-0 flex p-3 py-1 w-full items-center justify-center -bottom-[50px] rounded-lg bg-black bg-opacity-25 text-white transition-all ease-in-out duration-300">
        <div className="relative">
          <div
            className="absolute -top-[26px] left-[72px] w-0 h-0
              border-l-[8px] border-l-transparent
              border-b-[10px] border-b-black border-opacity-25
              border-r-[8px] border-r-transparent"
          />
        </div>
        <span className="text-[9px] font-semibold w-fit">{tooltip}</span>
      </div>
    </a>
  )
}

export const MainPageHero = () => {
  return (
    <div className="w-full h-screen bg-main-hero bg-fixed bg-cover bg-center flex flex-row">
      <div className="relative w-1/2 h-full bg-white">
        <div className="absolute bottom-6 w-full flex flex-col gap-3 justify-center items-center animate-fade-down animate-delay-[2000ms]">
          {/* <span className='text-sm text-slate-400'>Részletek</span> */}
          <a
            href="#about-us"
            className="p-2 rounded-full bg-white shadow-lg border-slate-200 border animate-bounce animate-duration-[1500ms] animate-ease-in-out"
          >
            <ArrowDownIcon className="text-slate-300" />
          </a>
        </div>
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="w-1/2 flex flex-col items-start gap-10 max-w-[400px]">
            <Image
              src={samLogo}
              alt="Simple Accounting Manager"
              className="w-full animate-fade-right animate-duration-[800ms] animate-ease-in-out"
            />
            <div className="w-full border-primary-orange gap-8 flex justify-center animate-fade-right animate-duration-[800ms] animate-delay-[500ms] animate-ease-in-out">
              <Button
                variant={'secondary'}
                size={'lg'}
                className="flex flex-row items-center gap-4 shadow-lg"
              >
                Belépés
                <LogIn />
              </Button>
              <Button size={'lg'} variant={'outline'} className="shadow-lg">
                Tudj meg többet!
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full bg-black/25 backdrop-blur-lg">
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="w-fit flex flex-row gap-12 mx-auto items-start">
            <HeroCard
              name="App Store"
              link="/"
              image={appleLogo}
              qrCode={appleQR}
              tooltip="Alkalmazás letöltése az App Store-ból"
            />
            <HeroCard
              name="Play Store"
              link="/"
              image={playStoreLogo}
              qrCode={androidQR}
              tooltip="Alkalmazás letóltáse a Play Store-ból"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
