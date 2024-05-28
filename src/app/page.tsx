import { MainPageAboutUsSection } from '@/components/custom/main-page/MainPageAboutUsSection'
import MainPageContact from '@/components/custom/main-page/MainPageContact'
import { MainPageHelpSection } from '@/components/custom/main-page/MainPageHelpSection'
import { MainPageHero } from '@/components/custom/main-page/MainPageHero'
import { MainPagePricing } from '@/components/custom/main-page/MainPagePricing'
import { MainPagePros } from '@/components/custom/main-page/MainPagePros'
import MainPageTheySaid from '@/components/custom/main-page/MainPageTheySaid'

export default function Home() {
  return (
    <>
      <MainPageHero />
      <MainPageAboutUsSection />
      <MainPagePros />
      <MainPagePricing />
      <MainPageTheySaid />
      <MainPageHelpSection />
      <MainPageContact />
    </>
  )
}
