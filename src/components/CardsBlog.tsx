import React from 'react'
import { IoReturnDownForwardOutline } from 'react-icons/io5'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Image from 'next/image'
import Link from 'next/link'
import { roboto, righteous } from '../fonts/FIndex'


type Props = {}

const CardsBlogComponent = (props: Props) => {
  return (
    <div className="w-full" id="blog">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 py-24">
        <div className="flex items-center gap-1">
          <IoReturnDownForwardOutline className="text-[var(--primary-color)]" />
          <h1 className={`${roboto.className} text-xs text-zinc-500`}>Blog</h1>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between w-full">
            <h1 className={`${righteous.className} text-3xl text-black`}>
              Artigos em destaque
            </h1>
            <section className="flex items-center justify-center gap-4 pr-2">
              <button aria-label="Botão_para_voltar">
                <SlArrowLeft size={30} className="text-zinc-500" />
              </button>

              <button aria-label="Botao_para_avancar">
                <SlArrowRight size={30} className="text-zinc-500" />
              </button>
            </section>
          </div>
          <div>
            <div className="flex flex-col gap-4 border-2 border-gray-700 rounded-md">
              <Image src="/logo.png" width={100} height={100} alt="image" className='w-72 h-auto'/>
              <h1 className={`${righteous.className} text-xl text-black`}>
                Como ser um bom programador
              </h1>
              <p className="text-zinc-500">10/05/2022</p>
              <p className="text-zinc-500">10 min de leitura</p>
              <Link href="/blog"> Leia mais</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardsBlogComponent
