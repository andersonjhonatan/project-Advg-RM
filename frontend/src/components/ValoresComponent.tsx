import React from 'react'
import { roboto } from '@/fonts/FIndex'
import Animations from '@/Animations/Animations'
import { Valores, IValores } from '@/interfaces/IValores'

const ValoresComponent = () => {
  Animations()
  return (
    <div
      className="bg-[var(--primary-color)] py-16 w-screen "
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="flex flex-col max-w-7xl mx-auto gap-8 items-center ">
        <div className="flex gap-4 justify-around max-md:flex-col px-4">
          {Valores.map((valores: IValores, index) => (
            <div
              className=" flex flex-col rounded-md py-4 gap-3 items-center text-center p-4 w-full border border-white "
              key={index}
            >
              <div className="text-4xl text-white">{valores.icon}</div>
              <h1 className={`${roboto.className} text-xl text-white`}>
                {' '}
                {valores.title}
              </h1>
              <p
                className={`${roboto.className} text-sm text-white whitespace-normal break-all text-justify indent-4`}
              >
                {valores.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValoresComponent
