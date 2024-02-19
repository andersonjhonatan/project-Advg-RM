import React from 'react'
import { Roboto } from 'next/font/google'
const roboto = Roboto({ weight: '400', subsets: ['latin'], style: 'italic' })
type Props = {}

const FraseComponent = (props: Props) => {
  return (
    <div className="bg-amber-300 w-screen py-6 px-20 object-cover ">
      <div className="flex flex-col max-w-[60rem] mx-auto gap-4 items-center indent-4">

      <p className={`'after:content-["”"] after:font-bold after:text-xl before:content-["“"] before:font-bold before:text-xl py-12 text-black font-light text-justify leading-6' ${roboto.className}`}>
        Ser especializado em Direito Previdenciário não implica endossar ou julgar
        situações, mas sim em assegurar os direitos daqueles que buscam uma proteção
        social justa, conforme estabelecido pela legislação. O advogado previdenciário
        atua ao lado do segurado, em um contexto muitas vezes desafiador, onde ninguém
        deseja se encontrar, representando aqueles que buscam acessar benefícios
        previdenciários. Nossa missão é defender os direitos previdenciários,
        proporcionando suporte a indivíduos em uma busca por segurança financeira, sem
        emitir juízos sobre suas circunstâncias
      </p>
      </div>
    </div>
  )
}

export default FraseComponent
