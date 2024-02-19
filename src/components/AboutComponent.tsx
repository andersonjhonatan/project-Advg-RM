import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div>
      <div className="w-full flex justify-center relative">
        <Image
          src="/pexels-katrin-bolovtsova-6077326.jpg"
          alt="logo"
          width={200}
          height={100}
          className="object-cover w-full h-full"
        />

        <div className="absolute top-0 translate-y-1/2 left-32 w-2/5 h-2/4 bg-black/50 text-white border border-gray-700 gap-11 flex flex-col">
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
