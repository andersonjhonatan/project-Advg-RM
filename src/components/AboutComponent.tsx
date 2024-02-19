import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div className="bg-neutral-100 h-3/4 w-screen">
      <div className=" flex justify-center relative">
        <Image
          src="/pexels-katrin-bolovtsova-6077326.jpg"
          alt="logo"
          width={2000}
          height={100}
          className="object-cover"
        />

        <div className="absolute top-0 translate-y-32 left-32 w-2/6 bg-black/50 text-white border border-gray-700 gap-11 flex flex-col">
          <div className="p-8 gap-8 flex flex-col">
            <h1 className="text-3xl">Sobre</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quod, hic
              officiis totam eum neque beatae! Dicta dolorum iure mollitia. Dicta
              dignissimos nemo aliquid itaque molestias debitis hic provident quos.
            </p>
            <button className="bg-black text-white rounded-sm p-2">Entrar em contato</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
