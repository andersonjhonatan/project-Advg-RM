import React from 'react'
import { HeaderLinks } from './HeaderComponent'
import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiWhatsapp, SiFacebook } from 'react-icons/si'
import ButtonWhatsaap from './ButtonWhatsaap'
import ButtonBackTopComponent from './BackTopComponent'
import Image from 'next/image'
import { roboto } from '../fonts/FIndex'


interface IFaleComigo {
  title: string
  content: string
}

const FaleComigo: IFaleComigo[] = [
  {
    title: 'Endereço',
    content: 'Rua Getúlio Vargas, 162, centro, São José da Tapera-Al',
  },
  {
    title: 'Email',
    content: 'contatorosamuniz@gmail.com',
  },
  {
    title: 'Telefone',
    content: '(82) 9 9631-8357',
  },
]

const FooterComponent = () => {
  return (
    <footer className="bg-zinc-900 w-screen flex flex-col items-center relative containerFooter">
      <ButtonWhatsaap title="Atendimento Online" />
      <ButtonBackTopComponent title="Voltar ao topo"  />
      <div className="w-full bg-zinc-900/90 py-12 px-4">
        <div className="flex mx-auto items-center w-full max-w-7xl justify-between max-md:flex-col gap-10 ">
          <div className="flex flex-col items-center">
            <Image src="/logoheader1.png" width={250} height={100} alt="logo" className="cursor-pointer w-auto max-md:w-40"  />
          </div>
          <div className="max-lg:hidden">
            {HeaderLinks.slice(1, HeaderLinks.length).map((link: string) => (
              <nav key={link}>
                <Link
                  href={`#${link.toLowerCase()}`}
                  className={`${roboto.className} text-sm hover:underline underline-offset-4 p-2 px-6 hover:rounded-sm text-white`}
                >
                  {link.toUpperCase()}
                </Link>
              </nav>
            ))}
          </div>
          <div className="max-md:grid max-md:grid-cols-2 max-md:gap-4">

            {FaleComigo.map((faleComigo: IFaleComigo, index) => (
              <div className="flex flex-col" key={index}>
                <h1
                  className={`${roboto.className} text-sm font-semibold text-white mt-2`}
                >
                  {faleComigo.title}
                </h1>
                <p className={`${roboto.className} text-sm max-md:text-xs text-zinc-300 max-md:break-all`}>
                  {faleComigo.content}
                </p>
              </div>
            ))}
            <div className="flex gap-4 mt-6 max-md:mt-0 max-md:items-center">
              <Link href="https://www.instagram.com/rosamuniz.adv" aria-label='Instagram' className='cursor-pointer md:z-20'>
                <SlSocialInstagram size={25} className="text-white" />
              </Link>
              <Link
                href="https://wa.me/5582996318357"
                className="flex flex-col items-center justify-center gap-4 cursor-pointer "
                aria-label='Whatsapp'
              >
                <SiWhatsapp size={25} className="text-white md:z-20" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center  bg-zinc-900/90 max-md:text-center">
        <p className={`${roboto.className} text-xs max-md:text-[8px] max-md:px-4 text-zinc-300`}>
          {' '}
          ©2024 por Rosa Muniz - Todos os Direitos Reservados | Desenvolvido por{' '}
          <a
            className="underline "
            href="https://portfolio-seven-flax-47.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Desenvolvido por Anderson Jhonatan"
          >
            Anderson Jhonatan
          </a>
        </p>
      </div>
    </footer>
  )
}

export default FooterComponent
