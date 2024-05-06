import Image from 'next/image'
import * as React from 'react'
import navLogo from '@/images/sam-logo-small.png'
import facebook from '@/images/icons/icons8-facebook (1).svg'
import threads from '@/images/icons/icons8-threads.svg'
import instagram from '@/images/icons/icons8-instagram-48.png'
import linkedin from '@/images/icons/icons8-linkedin.svg'

interface EmailTemplateProps {
  company: string
  person: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ person, company }) => (
  <main className="w-full max-w-screen-lg mx-auto flex items-center bg-white">
    <div className="w-full flex flex-row justify-between items-end py-6 border-b border-primary-orange">
      <a href={'https://www.google.com'}>
        <Image src={navLogo} alt="SAM Logo" className="h-10 w-9" />
      </a>
      <span className="font-bold text-3xl">Kapcsolatfelvétel</span>
    </div>
    <div className="w-full flex flex-col py-6 gap-4">
      <h1 className="font-bold text-3xl">Tisztelt {person},</h1>
      <p className="text-base">
        Köszönjük a megkeresést a(z) <strong>{company}</strong> nevében.<br></br>Munkatársaink
        hamarosan felveszik Önokkel a kapcsolatot!
      </p>
    </div>
    <div className="w-full flez justify-center gap-6 items-center py-6 border-t border-primary-orange">
      <a href="/">
        <Image src={facebook} alt="Facebook Icon" className="h-5 w-5" />
      </a>
      <a href="/">
        <Image src={threads} alt="Threads Icon" className="h-5 w-5" />
      </a>
      <a href="/">
        <Image src={instagram} alt="Instagram Icon" className="h-5 w-5" />
      </a>
      <a href="/">
        <Image src={linkedin} alt="Linkedin Icon" className="h-5 w-5" />
      </a>
    </div>
  </main>
)
