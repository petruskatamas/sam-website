import { MainPageAboutUsSection } from '@/components/custom/main-page/MainPageAboutUsSection'
import { MainPageHero } from '@/components/custom/main-page/MainPageHero'
import { MainPagePros } from '@/components/custom/main-page/MainPagePros'

export default function Home() {
  return (
    <>
      <MainPageHero />
      <MainPageAboutUsSection />
      <MainPagePros />
    </>
  )
}
