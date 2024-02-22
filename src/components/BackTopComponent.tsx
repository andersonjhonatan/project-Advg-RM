import Link from 'next/link'
import React from 'react'
import { SlArrowUp } from 'react-icons/sl'
import { roboto } from '../fonts/FIndex'

type Props = {
  title: string
}

const BackTopComponent = (props: Props) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    console.log('top')
  }
  return (
    <div
      className="absolute bottom-10 left-10 z-50"
    >
      <button
        className="text-white p-2 rounded-full flex flex-col items-center gap-1"
        aria-label="Botão_topo"
        onClick={scrollTop}
      >
        <SlArrowUp size={30} className="animate-bounce" />
        <p className={`${roboto.className} text-sm text-white`}>{props.title}</p>
      </button>
    </div>
  )
}
export default BackTopComponent
