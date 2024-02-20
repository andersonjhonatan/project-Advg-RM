import React from 'react'
import { HeaderLinks } from './HeaderComponent'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { SlSocialInstagram } from 'react-icons/sl'
import { SiWhatsapp, SiFacebook } from 'react-icons/si'

const roboto = Roboto({ weight: '400', subsets: ['latin'], style: 'normal' })

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
    <footer className="bg-zinc-900 w-screen
     flex flex-col items-center containerFooter">
      <div className="w-full bg-zinc-900/90">
        <div className="flex mx-auto p-8 w-full max-w-7xl justify-between">
          <div className="flex flex-col items-center">
            <h1 className={`${roboto.className} text-2xl text-white`}>Rosa Muniz</h1>
            <p className={`${roboto.className} text-sm text-zinc-300`}>Advocacia</p>
          </div>
          <div className="">
            {HeaderLinks.map((link: string) => (
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
              <Link href="https://www.instagram.com/rosamuniiiz/">
                <SlSocialInstagram size={
                  25} className="text-white" />
              </Link>
              <Link
                href="https://wa.me/5511979999999"
                className="flex flex-col items-center justify-center gap-4"
              >
                <SiFacebook size={25} className="text-white" />
              </Link>
              <Link
                href="https://wa.me/5511979999999"
                className="flex flex-col items-center justify-center gap-4"
              >
                <SiWhatsapp size={25} className="text-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p className={`${roboto.className} text-sm text-zinc-300`}>
            {' '}
            ©2024 por Rosa Muniz - Todos os Direitos Reservados | Desenvolvido por{' '}
            <a
              className="hover:underline"
              href="https://portfolio-seven-flax-47.vercel.app/"
            >
              Anderson Jhonatan
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
