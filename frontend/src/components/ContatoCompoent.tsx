import React from 'react'
import FormComponent from './FormComponent'

import { IoReturnDownForwardOutline } from 'react-icons/io5'
import { roboto, righteous } from '../fonts/FIndex'
import Animations from '@/Animations/Animations'

const ContatoCompoent = () => {
  Animations()
  return (
    <div className=" w-screen" id="contato" data-aos="fade-up" data-aos-duration="1000">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 max-md:gap-2 py-24 px-4">
        <div className="flex items-center gap-1">
          <IoReturnDownForwardOutline className="text-[var(--primary-color)]" />
          <h1 className={`${roboto.className} text-xs text-zinc-500`}>Contato</h1>
        </div>
        <div className="flex flex-col gap-6 ">
          <h1 className={`${righteous.className} text-3xl text-black`}>Como Agendar</h1>
          <p className={`${roboto.className} text-sm text-black`}>
            Abrangemos todo o território nacional por meio de consultorias online. Por
            favor, compartilhe um resumo do seu caso, suas principais perguntas e a
            urgência que você atribui para a resolução.
          </p>
          <p
            className={`${roboto.className} text-sm text-black break-all text-justify`}
          ></p>
        </div>
        <FormComponent />
      </div>
    </div>
  )
}

export default ContatoCompoent
