import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export const MainPageHelpSection = () => {
  return (
    <div className="w-full pb-32">
      <div className="w-full max-w-screen-lg mx-auto flex flex-col gap-10">
        <h2>Gyakran ismételt kérdések</h2>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Kivel kötök én, mint könyvelőiroda szerződést?</AccordionTrigger>
              <AccordionContent>
                Szerződés a program (Simple Accounts Management) tulajdonosával (Smart Tech
                Investment Kft.) jön közvetlenül létre.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Ügyfelem milyen szerződéses viszonyba kerül a program tulajdonosával?
              </AccordionTrigger>
              <AccordionContent>
                Tekintettel arra, hogy a szerződés a “könyvelőiroda” és a “SAM” tulajdonosa között
                jön létre, így jogi értelemben vett szerződés a felhasználó és a program tulajdonosa
                között nem jön létre.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Hogy kezeli a rendszer a számlák letöltését?</AccordionTrigger>
              <AccordionContent>
                A program automatikusan frissíti a NAV rendszerből lekért számlák listáját
                esténként. Az esti frissítés nem akadályozza - lassítja a nap közben használatot.
                Ezen túlmenően természetesen lehetőség van manuálisan is frissítést kezdeményezni.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Eddig felhő alapú rendszert használtam, miben lesz ez más?
              </AccordionTrigger>
              <AccordionContent>
                A SAM használata megkönnyíti a számlaképek kezelését és ezzel egy időben a kezelését
                valamint küldését. Nincs szükség külön felhő alapú tárhelyre ezzel egy időben pedig
                annak előfizetésére - karbantartására. Az applikáción keresztüli elérés illetve
                használat közvetlen elérést biztosít a könyvelést végző iroda részére. A számlakép
                illetve melléklet egyszerű használat mellet feltölthető - archiválható és ezzel
                együtt biztosítható a könyvelő részére.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Mi történik, ha a program/szolgáltatás nem elérhető?
              </AccordionTrigger>
              <AccordionContent>
                Felhő alapú háttérben tárolja a vállalkozó az adatokat, melyek maximális biztonságát
                szavatolja a GDPR törvényi elvárásainak megfelelően. Tárhely karbantartása a
                vállalkozó teljeskörű feladata.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Van összekötés számlázási felületek között?</AccordionTrigger>
              <AccordionContent>
                Jelenleg a szamlazz.hu és a billingo.hu felületekkel van programunk összekapcsolva.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Van lehetőség próbaidőszakra?</AccordionTrigger>
              <AccordionContent>
                Megbeszélés szerint a kiválasztott Ügyféllel van lehetőség próbaidőszak
                biztosítására. (Max 3. hónap / 2 Ügyfél / ….. db számlaforgalom) . Amennyiben
                szerződéskötés történik az időszakot követően, abban az esetben ez az időszak
                díjmentes. Ellenkező esetben …. HUF + áfa / hó díjat számlázunk az iroda részére. A
                próbaidőszakra szükséges megállapodás aláírását követően biztosítjuk a hozzáférést
                és a bevezetési támogatást.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
