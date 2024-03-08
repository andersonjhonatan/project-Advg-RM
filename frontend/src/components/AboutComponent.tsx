import React from 'react'
import { roboto, righteous } from '../fonts/FIndex'
import Link from 'next/link'


const AboutComponent = () => {
  return (
    <div className="w-screen containerHome mt-28" id="sobre" >
      <div className="flex w-full max-w-7xl mx-auto items-center h-full">
        <div className="flex flex-col px-4">
          <div className="gap-8 rounded-md flex flex-col bg-zinc-900/60 p-8 border border-[var(--primary-color)] w-1/3 justify-center max-lg:w-full">
            <h1 className={`${righteous.className} text-3xl text-white`}>Sobre</h1>
            <p className={`${roboto.className} text-sm text-white break-all leading-relaxed text-justify indent-4`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <p className={`${roboto.className} text-sm text-white break-all leading-relaxed text-justify indent-4`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>

            <Link
              className={`border border-[var(--primary-color)] text-white rounded-sm p-2 ${roboto.className} hover:bg-[var(--primary-color)] hover:text-black transition-all duration-200 text-center`}
              aria-label="Entrar_em_contato"
              href="#contato"
            >
              Entrar em contato
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
