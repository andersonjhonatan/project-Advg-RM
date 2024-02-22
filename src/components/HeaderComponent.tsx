'use client'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { poppins } from '../fonts/FIndex'



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
    <header className="w-screen" id="inicio">
      <div className="flex   bg-[var(--primary-color)] fixed top-0  w-full shadow-sm z-10 ">
        <div className="flex gap-8 max-w-7xl w-full items-center justify-between mx-auto py-8">
          <div className="flex flex-col items-center">
            <Image src="/logoheader1.png" width={250} height={100} alt="logo" className="cursor-pointer" />
          </div>
          <div className="flex gap-8">
            {HeaderLinks.map((link: string) => (
              <nav key={link} className="flex gap-6">
                <Link
                  href={`/#${
                    link.includes(' ')
                      ? link.toLowerCase().replaceAll(' ', '')
                      : link.toLowerCase()
                  }`}
                  className={`${poppins.className} text-sm hover:underline underline-offset-4 p-2 flex hover:rounded-sm text-white font-bold `}
                >
                  {link}
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
