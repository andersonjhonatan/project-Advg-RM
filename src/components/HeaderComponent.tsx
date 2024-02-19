import Link from 'next/link'
import React from 'react'
import { Roboto } from 'next/font/google'
import Head from 'next/head';

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

const HeaderLinks = [
  'Inicio',
  'Sobre',
  'Área de Atuação',
  'Localização',
  'Blog',
  'Contato',
]

const HeaderComponent = () => {
  return (
    <header className="w-screen">
      <div className="flex mx-auto p-8 justify-evenly bg-neutral-100 fixed top-0 left-auto right-auto w-full shadow-sm shadow-neutral-400 z-10 items-center">
        <div className='flex flex-col items-center'>
          <h1 className={`${roboto.className} text-2xl`}>Rosa Muniz</h1>
          <p className={`${roboto.className} text-sm`}>Advocacia</p>
        </div>
        <div className="flex">

        {HeaderLinks.map((link: string) => (
          <nav key={link}>
            <Link href={`#${link.toLowerCase()}`} className={`${roboto.className} text-sm hover:bg-slate-200 p-2 px-6 hover:rounded-sm`}>{link.toUpperCase()}</Link>
          </nav>
        ))}
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
