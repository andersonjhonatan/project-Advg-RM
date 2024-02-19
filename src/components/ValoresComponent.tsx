import React from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

interface IValores {
  title: string
  content: string
}

const Valores: IValores[] = [
  {
    title: 'Missão',
    content:
      'Buscar incansavelmente por Justiça, dedicando-nos com firmeza e determinação, utilizando uma variedade de estratégias e recursos na defesa dos direitos previdenciários.',
  },
  {
    title: 'Visão',
    content:
      'Impactar positivamente vidas, defendendo de forma abrangente o Direito Previdenciário em oposição ao poder regulatório estatal, com o propósito de promover segurança financeira e transformar o futuro de nossos clientes.',
  },
  {
    title: 'Valores',
    content:
      'Ética, transparência, comprometimento, respeito, integridade, proteção, empatia, dedicação, confiança e coragem, guiando-nos no compromisso constante de preservar e promover os direitos previdenciários de nossos clientes.',
  },
]

const ValoresComponent = () => {
  return (
    <div className="bg-amber-300 py-16 w-screen">
      <div className="flex flex-col max-w-7xl mx-auto gap-8 items-center ">
        <div className="flex gap-4 justify-around">
          {Valores.map((valores: IValores, index) => (
            <div className=" flex flex-col rounded-md py-4 gap-3 text-center p-4 w-full" key={index}>
              <h1 className={`${roboto.className} text-2xl text-white`}>
                {' '}
                {valores.title}
              </h1>
              <p className={`${roboto.className} text-sm text-white whitespace-normal break-all text-justify` }>{valores.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValoresComponent
