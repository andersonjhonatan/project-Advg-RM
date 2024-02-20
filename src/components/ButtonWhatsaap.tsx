import Link from 'next/link'
import React from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'], style: 'normal' })

type Props = {
  title: string
}

const ButtonWhatsaap = (props: Props) => {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5511999999999"
      className={`bg-green-500 text-white p-2 rounded-full fixed bottom-10 right-6 px-4 z-50 ${roboto.className} flex items-center gap-2`}
    >
      <SiWhatsapp />
      {props.title}
    </Link>
  )
}

export default ButtonWhatsaap
