import React from 'react'
import { SlArrowUp } from 'react-icons/sl'
import { roboto } from '../fonts/FIndex'


type Props = {
  title: string
}

const ButtonBackTopComponent = (props: Props) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div
      className="absolute bottom-4 left-0 right-0 flex justify-center"
    >
      <button 
        className="text-white p-2 rounded-full flex flex-col items-center"
        aria-label="Botão_topo"
        onClick={scrollTop}
      >
        <SlArrowUp size={30} className="animate-bounce" />
        <p className={`${roboto.className} text-sm text-white`}>{props.title}</p>
      </ button>
    </div>
  )
}
export default ButtonBackTopComponent
