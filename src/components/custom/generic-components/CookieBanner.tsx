'use client'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'

export function cookieConsentGiven() {
  if (!localStorage.getItem('cookie_consent')) {
    return 'undecided'
  }
  return localStorage.getItem('cookie_consent')
}

export default function CookieBanner() {
  const [consentGiven, setConsentGiven] = useState<string | null>()

  useEffect(() => {
    // We want this to only run once the client loads
    // or else it causes a hydration error
    setConsentGiven(cookieConsentGiven())
  }, [])

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'yes')
    setConsentGiven('yes')
  }

  const handleDeclineCookies = () => {
    localStorage.setItem('cookie_consent', 'no')
    setConsentGiven('no')
  }

  return (
    <div
      className={`w-full fixed bottom-0 bg-white border-t border-primary-orange transition-all duration-500 ease-in-out ${consentGiven != 'undecided' ? 'opacity-0 translate-y-32' : 'opacity-100'}`}
    >
      <div className="w-full px-8 py-4 flex flex-col md:flex-row items-center gap-4 justify-between">
        <p className="text-sm">
          Ez a weboldal sütiket használ a felhasználói élmény javítása érdekében. Az
          &quot;Elfogadom&quot; gombra kattintva hozzájárul a sütik használatához. További
          információkért kérjük, olvassa el Adatvédelmi szabályzatunkat.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant={'secondary'} size={'lg'} onClick={handleAcceptCookies}>
            Elfogadom
          </Button>
          <Button variant={'default'} size={'lg'} onClick={handleDeclineCookies}>
            Elutasítom
          </Button>
        </div>
      </div>
    </div>
  )
}
