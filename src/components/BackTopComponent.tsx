import Link from 'next/link'
import React from 'react'
import { SlArrowUp } from 'react-icons/sl'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '400', subsets: ['latin'] })

type Props = {
  title: string
}

const BackTopComponent = (props: Props) => {
  return (
    <div
      className="absolute bottom-10 left-10
     z-50"
    >
      <Link
        href="#sobre"
        className="text-white p-2 rounded-full flex flex-col items-center gap-1"
      >
        <SlArrowUp size={30} className="animate-bounce" />
        <p className={`${roboto.className} text-sm text-white`}>{props.title}</p>
      </Link>
    </div>
  )
}
export default BackTopComponent
