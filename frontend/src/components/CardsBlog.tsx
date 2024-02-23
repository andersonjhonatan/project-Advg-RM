import React from 'react'
import { IoReturnDownForwardOutline } from 'react-icons/io5'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Link from 'next/link'
import { roboto, righteous } from '../fonts/FIndex'
import ArtigosComponent from './ArtigosComponent'

type Props = {}

const CardsBlogComponent = (props: Props) => {
  const nextCard = () => {
    console.log('next')
  }
  const prevCard = () => {
    console.log('prev')
  }
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
              <button aria-label="Botão_para_voltar" onClick={prevCard}>
                <SlArrowLeft size={30} className="text-zinc-500" />
              </button>

              <button aria-label="Botao_para_avancar" onClick={nextCard}>
                <SlArrowRight size={30} className="text-zinc-500" />
              </button>
            </section>
          </div>
        </div>
        <ArtigosComponent />
        <Link
          href="/blog"
          className="text-white bg-[var(--primary-color)] border border-[var(--primary-color)] lg:w-2/12 w-1/2 sm:w-full md:w-1/2 p-2 rounded-md hover:bg-white hover:text-black duration-300 ease-in-out hover justify-center items-center text-center"
        >
          Ver todos
        </Link>
      </div>
    </div>
  )
}

export default CardsBlogComponent
