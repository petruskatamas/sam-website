import React from 'react'
import { Button } from '@/components/ui/button'
import Image, { StaticImageData } from 'next/image'
import samLogo from '@/images/sam-logo.png'
import appleLogo from '@/images/app-store.png'
import playStoreLogo from '@/images/robot.png'
import appleQR from '@/images/apple-sam-qr.png'
import androidQR from '@/images/android-sam-qr.png'
import getItInPlay from '@/images/get-in-play.png'
import getItInApp from '@/images/get-in-app.png'
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
    <div className="w-full h-fit lg:h-screen bg-main-hero bg-fixed bg-cover bg-center flex flex-col lg:flex-row ">
      <div className="relative w-full h-screen lg:h-full lg:w-1/2 bg-white border-b border-primary-orange pb-16 lg:pb-0">
        <div className="absolute bottom-1 w-full flex flex-col gap-3 justify-center items-center animate-fade-down animate-delay-[2000ms]">
          <div className="flex flex-col gap-2 items-center animate-bounce animate-duration-1500 animate-ease-in-out">
            <span className="text-sm text-primary-orange">Tudjon meg többet</span>
            <a href="#about-1" className="p-2 rounded-full w-fit bg-primary-orange shadow-lg">
              <ArrowDownIcon className="text-white" />
            </a>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="w-2/3 lg:w-1/2 flex flex-col items-start gap-10 max-w-[400px]">
            <Image
              src={samLogo}
              alt="Simple Accounting Management"
              className="w-full lg:animate-fade-right lg:animate-duration-[800ms] lg:animate-ease-in-out"
            />
            <div className="w-full">
              <h2 className="w-full text-center font-medium text-base border-t border-b border-primary-orange py-4">
                Könyvelés támogató rendszer
              </h2>
            </div>
            <div className="w-full border-primary-orange gap-8 hidden lg:flex justify-center lg:animate-fade-right lg:animate-duration-[800ms] lg:animate-delay-[500ms] lg:animate-ease-in-out">
              <Button
                variant={'secondary'}
                size={'lg'}
                className="flex flex-row items-center gap-4 shadow-lg !w-[200px]"
              >
                Belépés
                <LogIn />
              </Button>
            </div>
            <div className="w-full flex flex-col lg:flex-row lg:hidden items-center justify-center gap-2 md:gap-8">
              <Button
                variant={'secondary'}
                size={'lg'}
                className="flex flex-row items-center gap-4 shadow-lg !w-[200px] mb-1"
              >
                Belépés
                <LogIn />
              </Button>
              <a className="w-fit h-fit flex items-center shadow-lg" href="/">
                <Image
                  src={getItInPlay}
                  alt="Play Strore"
                  className="w-[200px] sm:h-[57px] rounded-xl"
                />
              </a>
              <a className="w-fit h-fit shadow-lg" href="/">
                <Image src={getItInApp} alt="App Strore" className="w-[200px] sm:h-[60px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full bg-black/25 backdrop-blur-lg">
        <div className="flex flex-row justify-center items-center w-full h-full">
          <div className="w-fit flex flex-col md:flex-row gap-12 mx-auto items-start">
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
