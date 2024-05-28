import React from 'react'

const MainPageTheySaid = () => {
  return (
    <div
      id="they-said"
      className="scroll-mt-12 w-full h-fit lg:h-fit pt-16 pb-16 lg:pt-0 lg:pb-32 bg-white px-4 md:px-8 lg:px-0"
    >
      <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center gap-8">
        <h2>Rólunk mondták</h2>
        <div className="flex flex-row flex-wrap justify-between gap-4">
          <div className="w-full h-fit p-8 shadow-lg rounded-lg border-slate-200/50 border">
            <p className="text-slate-400 text-xl italic tracking-tight">
              „Egyszerű bevezetést tett lehetővé a könyvelt cégek (Ügyfelek) felé”{' '}
            </p>
          </div>
          <div className="w-full h-fit p-8 shadow-lg rounded-lg border-slate-200/50 border">
            <p className="text-slate-400 text-xl italic tracking-tight">
              „Számlák állapotának követése nagy segítség a mindennapi munka folyamán”{' '}
            </p>
          </div>
          <div className="w-full h-fit p-8 shadow-lg rounded-lg border-slate-200/50 border">
            <p className="text-slate-400 text-xl italic tracking-tight">
              „Naprakészen, precízen látom a bejövő számláimat, és a pénzügyi munkatársam felé
              egyértelműen tudom dokumentálni a jóváhagyási folyamatokat is. Azóta nincs téves
              utalás, és egy kézben van minden számla és pénzügyi információ.”{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPageTheySaid
