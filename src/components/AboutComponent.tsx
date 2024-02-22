import React from 'react'
import { Roboto, Righteous } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const righteous = Righteous({ weight: '400', subsets: ['latin'] })

const AboutComponent = () => {
  return (
    <div className="w-screen containerHome h-screen" id="sobre">
      <div className="flex w-full max-w-7xl mx-auto items-center h-full">
        <div>
          <div className="gap-8 rounded-md flex flex-col bg-zinc-900/60 p-8 border border-[var(--primary-color)] w-1/3 justify-center">
            <h1 className={`${righteous.className} text-3xl text-white`}>Sobre</h1>
            <p className={`${roboto.className} text-sm text-white`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <p className={`${roboto.className} text-sm text-white`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <p className={`${roboto.className} text-sm text-white`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>

            <button className={`border border-[var(--primary-color)] text-white rounded-sm p-2 ${roboto.className}`}>
              Entrar em contato
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
