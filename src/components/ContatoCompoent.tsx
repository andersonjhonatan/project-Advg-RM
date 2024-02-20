import React from 'react'
import FormComponent from './FormComponent'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

type Props = {}

const ContatoCompoent = (props: Props) => {
  return (
    <div className=" w-screen">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 py-16">
        <div className="flex flex-col gap-4">
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
