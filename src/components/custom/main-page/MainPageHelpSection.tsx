import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'

export const MainPageHelpSection = () => {
  return (
    <div
      id="faq"
      className="scroll-mt-32 w-full max-w-screen-lg mx-auto pb-24 flex flex-col gap-16 px-8"
    >
      <h2 className="w-full text-center border-b border-primary-orange pb-8">
        Gyakran ismételt kérdések
      </h2>
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-10">
          <h3 className="w-full text-center">Könyvelőirodáknak</h3>
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
        <div className="w-full md:w-1/2 p-4 flex flex-col gap-10">
          <h3 className="w-full text-center">Cégeknek</h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Milyen felületeken érem el a programot?</AccordionTrigger>
              <AccordionContent>
                A könyvelést megrendelő cégek részére applikáció és webes elérési lehetőség áll
                fenn. Applikáció elérhető az ismert online áruházakban, asztali eléréshez
                telepítésre nincsen szükség, a program online érhető el.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Van valós veszélye az adatvesztésnek?</AccordionTrigger>
              <AccordionContent>
                Az adatvesztés lehetőségét rendszeres archiválással csökkenti a vállalkozó.
                Vállalkozó többek között szavatolja a mentésekhez hardware, szoftver szolgáltatást
                valamint az adatmentést és visszaállítást.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Van a rendszerhez háttértámogatás?</AccordionTrigger>
              <AccordionContent>
                Igen! Szerződéses megállapodás szerint a Vállalkozó munkaidőben vállalja az
                értékesített termék folyamatos elérhetőségét illetve háttértámogatását.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Mi garantálja a szolgáltatási szintet?</AccordionTrigger>
              <AccordionContent>
                Szerződésünk szerint garantált szolgáltatási szintet vállal cégünk, melynek
                dokumentált nem teljesülése esetén kötbérezési terhet jelent számunkra.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Ha vannak fejlesztési ötleteim azokat egyedileg be lehet építeni?
              </AccordionTrigger>
              <AccordionContent>
                Egyik fő erényünk az igényre szabott fejlesztés lehetősége. Szerződött Ügyfeleink
                fejlesztési javaslatait igyekszünk szem előtt tartani és kéréseiket beépíteni a
                programba.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Miért előnyös a rendszer használata?</AccordionTrigger>
              <AccordionContent>
                Gyorsabb, egyszerűbb kommunikáció az ügyfelek és a könyvelőiroda között.
                Applikációval elérhető felület könnyíti meg a számlák feltöltését és azok
                “összekapcsolását”, könyvelését státuszokkal jelölve.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>
                Önálló cégként (nem könyveléssel foglalkozom) tudok szerződést kötni?
              </AccordionTrigger>
              <AccordionContent>
                Programunkat, megoldásunkat a több telephellyel rendelkező vállalkozások részére is
                ajánljuk. Így ilyen esetekben előnyös lehet az általunk kínált megoldási lehetőség.
                (dokumentumok / számlák átadás – „mozgatása” telephelyek között)
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
