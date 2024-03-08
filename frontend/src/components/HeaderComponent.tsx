'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { poppins } from '../fonts/FIndex'
import { LuMenu } from 'react-icons/lu'

export const HeaderLinks = [
  'Inicio',
  'Sobre',
  'Área de Atuação',
  /* 'Localização',
  'Blog', */
  'Contato',
]

const HeaderComponent = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [])

  const handleClose = () => {
    setOpen(!open)
  }



  return (
    <header className="w-screen" id="inicio">
      <div className="flex containerFooter   bg-zinc-900 phoheader fixed top-0  w-full shadow-sm z-10 photoheader">
        <div className="w-full bg-zinc-900/90 px-4">

        <div className="flex gap-8 max-w-7xl w-full items-center justify-between mx-auto py-10 max-lg:w-3xl max-lg:px-8 max-md:px-4 ">
        
          <div className="flex flex-col items-center">
            <Link href="/" className="cursor-pointer" aria-label="logo">
              <Image
                src="/logoheader1.png"
                width={250}
                height={100}
                alt="logo"
                className={`cursor-pointer max-lg:w-52 max-md:w-44`}
              />
            </Link>
          </div>
          <div className={`${poppins.className} flex gap-2  items-center max-lg:hidden`}>
            {HeaderLinks.map((link: string) => (
              <nav key={link} className="flex gap-6 max-lg:hidden">
                <Link
                  href={`/#${link.toLowerCase().replaceAll(' ', '')}`}
                  className={`${poppins.className} text-sm hover:underline underline-offset-4 p-2 flex hover:rounded-sm text-white font-bold `}
                >
                  {link}
                </Link>
              </nav>
            ))}
          </div>
          {/* Menu Mobile */}
          <div className="flex gap-4 lg:hidden">
            <LuMenu
              onClick={() => setOpen(!open)}
              size={50}
              className="text-white cursor-pointer"
            />

            {open && (
              <div className='absolute max-lg:top-[9rem] max-md:top-[8.2rem] max-sm:top-[8.3rem] left-0 bg-black/70 w-screen h-[calc(100vh-4rem)]' onClick={handleClose}>
                <div className="absolute flex flex-col gap-8 p-4 right-0 bg-[var(--primary-color)] w-52 h-screen pt-8 transition-all">
                  {HeaderLinks.map((link: string) => (
                    <nav key={link} className="flex">
                      <Link
                        href={`/#${link.toLowerCase().replaceAll(' ', '')}`}
                        className={`${poppins.className} text-lg hover:underline underline-offset-4 flex hover:rounded-sm text-white font-bold `}
                      >
                        {link}
                      </Link>
                    </nav>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderComponent
