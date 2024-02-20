import React from 'react'
import FormComponent from './FormComponent'
import { Roboto } from 'next/font/google'
import { IoReturnDownForwardOutline } from 'react-icons/io5'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

const ContatoCompoent = () => {
  return (
    <div className=" w-screen">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 py-24">
        <div className="flex items-center gap-1">
          <IoReturnDownForwardOutline className='text-amber-300'/>
          <h1 className={`${roboto.className} text-xs text-zinc-500`}>Contato</h1>
        </div>
        <div className="flex flex-col gap-6">
          <h1 className={`${roboto.className} text-3xl text-black`}>Como Agendar</h1>
          <p className={`${roboto.className} text-sm text-black`}>
            Abrangemos todo o território nacional por meio de consultorias online.
          </p>
          <p className={`${roboto.className} text-sm text-black`}>
            Por favor, compartilhe um resumo do seu caso, suas principais perguntas e a
            urgência que você atribui para a resolução. Estaremos prontos para retornar
            com as opções de datas e horários disponíveis para agendamento, visando
            fornecer a assistência necessária de forma eficaz.
          </p>
        </div>
        <FormComponent />
      </div>
    </div>
  )
}

export default ContatoCompoent
