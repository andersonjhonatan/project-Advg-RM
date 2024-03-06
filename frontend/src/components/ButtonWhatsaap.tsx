import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { SiWhatsapp } from 'react-icons/si'
import { roboto } from '../fonts/FIndex'

type Props = {
  title: string
}
type Scroll = {
  scroll: number
}

const ButtonWhatsaap = (props: Props) => {
  const [scroll, setScroll] = useState<Scroll>({ scroll: 0 })

  useEffect(() => {
    const onScroll = () => setScroll({ scroll: window.scrollY })
    return onScroll()
  }, [])

  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5582996318357&text=Olá!%20um%20prazer%20te%20ter%20por%20aqui!%20%20Me%20conta%20sobre%20você:%20Qual%20seu%20nome%20e%20sua%20cidade?"
      className={`bg-green-600 text-white p-2 rounded-full fixed animate-pulse ${
        scroll.scroll < 200 ? 'bottom-4' : 'bottom-80'
      } right-3 px-4 z-50 ${
        roboto.className
      } flex items-center gap-2 text-sm shadow-md shadow-green-900 max-md:hidden`}
      target="_blank"
      rel="noreferrer"
      aria-label="Botão_whatsapp"
    >
      <SiWhatsapp />
      {props.title}
    </Link>
  )
}

export default ButtonWhatsaap
