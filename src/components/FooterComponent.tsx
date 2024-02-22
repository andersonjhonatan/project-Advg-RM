import React from 'react'
import { HeaderLinks } from './HeaderComponent'
import Link from 'next/link'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiWhatsapp, SiFacebook } from 'react-icons/si'
import ButtonWhatsaap from './ButtonWhatsaap'
import BackTopComponent from './BackTopComponent'
import Image from 'next/image'
import { roboto } from '../fonts/FIndex'


interface IFaleComigo {
  title: string
  content: string
}

const FaleComigo: IFaleComigo[] = [
  {
    title: 'Endereço',
    content: 'Avenida Paulista, 1000, São Paulo, SP',
  },
  {
    title: 'Email',
    content: '9Zx2c@example.com',
  },
  {
    title: 'Telefone',
    content: '(11) 9 9999-9999',
  },
]

const FooterComponent = () => {
  return (
    <footer className="bg-zinc-900 w-screen flex flex-col items-center relative containerFooter">
      <ButtonWhatsaap title="Atendimento Online" />
      <BackTopComponent title="Voltar ao topo" />
      <div className="w-full bg-zinc-900/90 py-12">
        <div className="flex mx-auto items-center w-full max-w-7xl justify-between">
          <div className="flex flex-col items-center">
            <Image src="/logoheader1.png" width={250} height={100} alt="logo" />
          </div>
          <div className="">
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
          <div>
            {FaleComigo.map((faleComigo: IFaleComigo, index) => (
              <div className="flex flex-col" key={index}>
                <h1
                  className={`${roboto.className} text-sm font-semibold text-white mt-2`}
                >
                  {faleComigo.title}
                </h1>
                <p className={`${roboto.className} text-sm text-zinc-300`}>
                  {faleComigo.content}
                </p>
              </div>
            ))}
            <div className="flex gap-4 mt-6">
              <Link href="https://www.instagram.com/rosamuniiiz/" aria-label='Instagram'>
                <SlSocialInstagram size={25} className="text-white" />
              </Link>
              <Link
                href="https://wa.me/5511979999999"
                className="flex flex-col items-center justify-center gap-4"
                aria-label='Facebook'
              >
                <SiFacebook size={25} className="text-white" />
              </Link>
              <Link
                href="https://wa.me/5511979999999"
                className="flex flex-col items-center justify-center gap-4"
                aria-label='Whatsapp'
              >
                <SiWhatsapp size={25} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center  bg-zinc-900/90">
        <p className={`${roboto.className} text-sm text-zinc-300`}>
          {' '}
          ©2024 por Rosa Muniz - Todos os Direitos Reservados | Desenvolvido por{' '}
          <a
            className="hover:underline"
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
