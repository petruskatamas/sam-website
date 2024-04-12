import Image from 'next/image'
import React from 'react'
import artwork from '@/images/artwork-6.webp'

export const MainPagePros = () => {
  return (
    <div className="w-full h-screen bg-pros-hero bg-fixed bg-repeat">
      <div className="w-full h-full bg-black/30 backdrop-blur-lg flex justify-center items-center">
        <div className="w-full max-w-screen-lg h-3/4 bg-white shadow-xl rounded-lg p-10 flex flex-row">
          <div className="w-1/2 h-full"></div>
          <div className="w-1/2 h-full flex justify-center items-center pl-6">
            <Image src={artwork} alt="Artwork" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
