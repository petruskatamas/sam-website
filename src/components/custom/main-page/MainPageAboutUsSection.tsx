import React from 'react'
import {
  AlarmClockCheckIcon,
  ChevronRightIcon,
  CloudUploadIcon,
  EyeIcon,
  FileClockIcon,
  NotebookTabsIcon,
  QrCodeIcon,
  TabletSmartphoneIcon
} from 'lucide-react'
import Image from 'next/image'
import aboutArtwork from '@/images/artwork-4.webp'
import samLogo from '@/images/sam-logo-small.svg'

export const MainPageAboutUsSection = () => {
  return (
    <section id="about-1" className="scroll-mt-12 w-full bg-white px-4 md:px-8 lg:px-0">
      <div className='className="w-full max-w-screen-lg mx-auto flex flex-col gap-10'>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 pt-16 lg:pt-32">
          <div className="container p-8 shadow-lg rounded-lg border-slate-200/50 border">
            <div className="max-w-2xl mx-auto">
              <div className="grid gap-12">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">A probléma</h2>
                </div>
                <div className="space-y-6 lg:space-y-10">
                  <div className="flex">
                    <FileClockIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                    <div className="ms-5 sm:ms-8">
                      <p className="mt-1 text-muted-foreground">
                        Egy kimutatás szerint a magyar könyvelők majdnem fele a munkaideje felét
                        monoton feladatokkal tölti
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <NotebookTabsIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                    <div className="ms-5 sm:ms-8">
                      <p className="mt-1 text-muted-foreground">
                        Harmaduk pedig a munkaidő háromnegyedében végez ehhez hasonló adatrögzítő
                        tevékenységet
                      </p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold border-t pt-8 border-primary-orange">
                      A fentieknek köszönhetően a tanácsadásra valamint a kiemelten fontos
                      kapcsolattartásra alig, vagy egyáltalán nem marad idő.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container p-8 shadow-lg rounded-lg border-slate-200/50 border">
            <div className="max-w-2xl mx-auto">
              <div className="grid gap-12">
                <div>
                  <h2 className="text-3xl font-bold lg:text-4xl">A megoldás</h2>
                </div>
                <div className="space-y-6 lg:space-y-10">
                  <div className="flex">
                    <QrCodeIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                    <div className="ms-5 sm:ms-8">
                      <p className="mt-1 text-muted-foreground">
                        A digitális fejlesztések bevezetésével már rövid távon is jelentős mértékben
                        csökkenthető a környezeti terhelés.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <CloudUploadIcon className="flex-shrink-0 mt-2 h-10 w-10" />
                    <div className="ms-5 sm:ms-8">
                      <p className="mt-1 text-muted-foreground">
                        A felhő alapú megoldások használata költséghatékonyabb, hozzájárul a
                        fenntartható működéshez és a terhelés csökkentéséhez.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold border-t pt-8 border-primary-orange">
                      Az innovatív technológiák alkalmazása lehetővé teszi a vállalatok és egyének
                      számára, hogy hatékonyabban működjenek.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image src={aboutArtwork} alt="Artwork" className="w-full" />
        </div>
        <div className="w-full">
          <div className="pb-16">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-8">
              <div className="relative lg:sticky top-0 lg:top-32 w-full lg:w-5/6 h-fit p-8 shadow-lg rounded-lg border-slate-200/50 border">
                <h2 className="border-b border-primary-orange pb-4 text-3xl font-semibold tracking-tight">
                  Újfajta kapcsolat könyvelőirodák és ügyfeleik között
                </h2>
                <p className="mt-3 text-muted-foreground">
                  A digitalizáció előretörésével egy újfajta kapcsolat alakul ki a könyvelőirodák és
                  ügyfeleik között, amely lehetővé teszi az adatok gyorsabb és hatékonyabb
                  megosztását.
                </p>
                <p className="mt-5">
                  <a
                    className="inline-flex items-center text-[14px] md:text-[17px] gap-x-1 group font-medium hover:underline hover:text-primary-orange transition-all duration-300 ease-in-out underline-offset-4 "
                    href="#contact"
                  >
                    Lépjen kapcsolatba a{' '}
                    <Image
                      src={samLogo}
                      alt="SAM Logo"
                      className="w-8 h-8 mx-1 group-hover:-translate-y-1 transition-all ease-in-out duration-300"
                    />{' '}
                    csapatával
                    <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
                  </a>
                </p>
              </div>
              <div className="space-y-6 lg:space-y-10 px-2 lg:px-0">
                <div className="flex group cursor-default">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full shadow-lg text-primary-orange group-hover:bg-primary-orange/90 group-hover:shadow-xl group-hover:text-white transition-all ease-in-out duration-300">
                    <EyeIcon className="flex-shrink-0 w-5 h-5" />
                  </span>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold pb-2 border-b border-primary-orange/90">
                      Egy jó SAM mindent lát
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      A rugalmas és gyors szolgáltatás biztosításához elengedhetetlen a jó látás és
                      a kommunikáció! Ebben segít a SAM!
                    </p>
                  </div>
                </div>
                <div className="flex group cursor-default">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full shadow-lg text-primary-orange group-hover:bg-primary-orange/90 group-hover:shadow-xl group-hover:text-white transition-all ease-in-out duration-300">
                    <QrCodeIcon className="flex-shrink-0 w-5 h-5" />
                  </span>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold pb-2 border-b border-primary-orange">
                      Egyszerűen, digitálisan
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      A felmerülő digitalizációs igényeket kielégítő kőnyveléstámogató program
                      mindenkinek!
                    </p>
                  </div>
                </div>
                <div className="flex group cursor-default">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full shadow-lg text-primary-orange group-hover:bg-primary-orange/90 group-hover:shadow-xl group-hover:text-white transition-all ease-in-out duration-300">
                    <TabletSmartphoneIcon className="flex-shrink-0 w-5 h-5" />
                  </span>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold pb-2 border-b border-primary-orange">
                      Mobilapplikáció
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Feltöltéssel azonnal a könyvelő rendelkezésére tudjuk bocsátani a könyveléshez
                      elengedhetetlen számlát.
                    </p>
                  </div>
                </div>
                <div className="flex group cursor-default">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full shadow-lg text-primary-orange group-hover:bg-primary-orange/90 group-hover:shadow-xl group-hover:text-white transition-all ease-in-out duration-300">
                    <AlarmClockCheckIcon className="flex-shrink-0 w-5 h-5" />
                  </span>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold pb-2 border-b border-primary-orange">
                      Időhatékony
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      Előzzük meg a felesleges utazásokat és az ezzel járó költségeket, használjuk
                      ki a digitális fejlődés nyújtotta lehetőségeket!
                    </p>
                  </div>
                </div>
                <div className="flex group cursor-default">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full shadow-lg text-primary-orange group-hover:bg-primary-orange/90 group-hover:shadow-xl group-hover:text-white transition-all ease-in-out duration-300">
                    <CloudUploadIcon className="flex-shrink-0 w-5 h-5" />
                  </span>
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold pb-2 border-b border-primary-orange">
                      Felhő alapú megoldás
                    </h3>
                    <p className="mt-1 text-muted-foreground">
                      A felhő alapú adattárolás elérhetővé teszi dokumentumjaink tárolását egy
                      távoli helyen, ahol a könyvelők, cégek és az ügyfelek is hozzáférnek, mindezt
                      fizikai adattárolás nélkül!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
