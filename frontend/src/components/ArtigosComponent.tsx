import { righteous } from '@/fonts/FIndex'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ArtigosComponent = () => {
  return (
    <div className="flex" id="blog">
      <div className="flex flex-col gap-4 border border-[var(--primary-color)] rounded-md  text-black p-2">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="image"
          className="w-72 h-auto rounded-md"
        />
        <h1 className={`${righteous.className} text-xl text-black`}>
          Como ser um bom programador
        </h1>
        <p className="text-zinc-500">10/05/2022</p>
        <p className="text-zinc-500">10 min de leitura</p>
        <Link href="/myBlog"> Leia mais</Link>
      </div>
    </div>
  )
}

export default ArtigosComponent
