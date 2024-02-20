import Link from 'next/link'
import React from 'react'
import { Roboto } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const HeaderLinks = [
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
      <div className="flex   bg-neutral-100 fixed top-0  w-full shadow-sm shadow-neutral-400 z-10 ">
        <div className="flex gap-8 max-w-7xl w-full items-center justify-between mx-auto py-8">
          <div className="flex flex-col items-center">
            <h1 className={`${roboto.className} text-2xl`}>Rosa Muniz</h1>
            <p className={`${roboto.className} text-sm`}>Advocacia</p>
          </div>
          <div className="flex gap-8">
            {HeaderLinks.map((link: string) => (
              <nav key={link} className='flex gap-6'>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className={`${roboto.className} text-sm hover:bg-slate-200 flex hover:rounded-sm`}
                >
                  {link.toUpperCase()}
                </Link>
              </nav>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
