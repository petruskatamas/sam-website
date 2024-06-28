import React from 'react'
import samLogo from '@/images/sam-logo-small.png'

const MainPageTheySaid = () => {
  return (
    <div
      id="they-said"
      className="scroll-mt-32 w-full h-fit lg:h-fit pt-16 pb-16 lg:pt-0 lg:pb-32 bg-white px-4 md:px-8 lg:px-0"
    >
      <div className="relative w-full max-w-screen-lg mx-auto flex flex-col items-center gap-8">
        <div className="absolute hidden lg:block right-32 top-36">
          <img src={samLogo.src} alt="Simple Accounting Management" className="w-24" />
        </div>
        <h2 className="w-full text-center border-b border-primary-orange pb-8">Rólunk mondták</h2>
        <div className="flex flex-row flex-wrap justify-between gap-4 pt-8">
          <div className="w-fit h-fit px-8 py-4 shadow-lg rounded-lg border-slate-200/50 border">
            <p className="text-slate-400 text-lg italic tracking-tight">
              „Egyszerű bevezetést tett lehetővé a könyvelt cégek (Ügyfelek) felé”
            </p>
          </div>
          <div className="w-fit h-fit px-8 py-4 shadow-lg rounded-lg border-slate-200/50 border">
            <p className="text-slate-400 text-lg italic tracking-tight">
              „Számlák állapotának követése nagy segítség a mindennapi munka folyamán”
            </p>
          </div>
          <div className="w-fit h-fit px-8 py-4 shadow-lg rounded-lg border-slate-200/50 border">
            <p className="text-slate-400 text-lg italic tracking-tight">
              „Naprakészen, precízen látom a bejövő számláimat, és a pénzügyi munkatársam felé
              egyértelműen tudom dokumentálni a jóváhagyási folyamatokat is. Azóta nincs téves
              utalás, és egy kézben van minden számla és pénzügyi információ.”
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPageTheySaid
