import React from 'react'
import { IoReturnDownForwardOutline } from 'react-icons/io5'
import { roboto, righteous } from '../fonts/FIndex'
import { GiInjustice, GiJusticeStar } from 'react-icons/gi'
import Animations from '@/Animations/Animations'


interface IAtuacao {
  title: string
  content: string
}

const Atuacao: IAtuacao[] = [
  {
    title: 'Aposentadorias',
    content:
      ' Assessoria na obtenção de aposentadorias por idade, tempo de contribuição, aposentadoria especial, aposentadoria por invalidez, entre outras modalidades.',
  },
  {
    title: 'Benefícios por incapacidade',
    content:
      'Representação de clientes que buscam benefícios como auxílio-doença, auxílio-acidente e aposentadoria por invalidez devido a incapacidade laboral.',
  },
  {
    title: 'Pensão por morte',
    content: 'Assistência a dependentes para obter pensão por morte de segurado do INSS.',
  },
  {
    title: 'Auxílio-reclusão',
    content:
      'Assessoramento para familiares de segurados que estão presos, buscando o recebimento do auxílio-reclusão.',
  },
  {
    title: 'Recursos administrativos e judiciais',
    content:
      'Interposição de recursos administrativos junto ao INSS e, quando necessário, atuação em processos judiciais para defender os direitos previdenciários dos clientes.',
  },
  {
    title: 'Assessoria a empresas',
    content:
      'Prestação de consultoria a empresas sobre questões previdenciárias relacionadas aos seus funcionários.',
  },
]

const AtuacaoComponent = () => {
  Animations()
  return (
    <div className="bg-zinc-900 w-screen py-24" id='áreadeatuação' data-aos="fade-up"
    data-aos-duration="1000">
      <div className="flex flex-col max-w-7xl mx-auto gap-2">
        <div className="flex">
          <IoReturnDownForwardOutline className="text-[var(--primary-color)]" />
          <h1 className={`${roboto.className} text-xs text-zinc-500`}>Atuação</h1>
        </div>
        <h1 className={`${righteous.className} text-3xl text-white mt-8`}>
          Área de atuação especializada
        </h1>
        <div className="flex flex-col max-w-7xl mx-auto gap-4 items-center">
          <div className="flex flex-col justify-center items-center border border-[var(--primary-color)] rounded-md w-full mt-16 py-4 gap-3">
            <GiInjustice size={180} className="text-white" />
            <h1 className={`${roboto.className} text-3xl text-white`}>
              Direito Previdenciário
            </h1>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-4 place-items-stretch mt-6">
            {Atuacao.map((atuacao: IAtuacao, index) => (
              <div
                className="flex flex-col border border-[var(--primary-color)] text-white rounded-md shadow-700 gap-4 p-8 justify-evenly shadow-md shadow-zinc-900/5"
                key={index}
              >
                <div className="flex items-center gap-2 ">
                  <GiJusticeStar size={25} className="text-[var(--primary-color)]" />
                  <h1 className={`${roboto.className} text-3xl text-white`}>
                    {' '}
                    {atuacao.title}
                  </h1>
                </div>
                <p>{atuacao.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AtuacaoComponent
