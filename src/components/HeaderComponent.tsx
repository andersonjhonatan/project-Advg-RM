import Link from 'next/link'
import React from 'react'
interface Props {
  children?: React.ReactNode
}

const HeaderLinks = [
  'Inicio',
  'Sobre',
  'Área de Atuação',
  'Localização',
  'Blog',
  'Contato',
]

const HeaderComponent = () => {
  return (
    <header className="w-screen">
      <div className='flex justify-around'>
        <div>
          <h1>Rosa Muniz - Advogada</h1>
        </div>
        <nav>
          {HeaderLinks.map((link) => (
            <Link key={link} href={`#${link.toLowerCase()}`}>
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default HeaderComponent
