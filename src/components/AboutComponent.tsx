import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutComponent = (props: Props) => {
  return (
    <div>
      <Image src='/pexels-katrin-bolovtsova-6077326.jpg' alt='logo' width={500} height={500} className='object-cover w-screen' />
    </div>
  )
}

export default AboutComponent