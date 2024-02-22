import Link from 'next/link'
import React from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { roboto } from '../fonts/FIndex'


type Props = {
  title: string
}

const ButtonWhatsaap = (props: Props) => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5511999999999"
      className={`bg-green-600 text-white p-2 rounded-full fixed bottom-10 right-3 px-4 z-50 ${roboto.className} flex items-center gap-2 text-sm shadow-md shadow-green-900`}
      target="_blank"
      rel="noreferrer"
      aria-label='Botão_whatsapp'
    >
      <SiWhatsapp />
      {props.title}
    </Link>
  )
}

export default ButtonWhatsaap
