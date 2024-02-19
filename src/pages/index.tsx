import AboutComponent from '@/components/AboutComponent'
import AtuacaoComponent from '@/components/Atuacao'
import CardsComponents from '@/components/CardsComponents'
import FraseComponent from '@/components/FraseComponent'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: '700', subsets: ['latin'] })

export default function Home() {
  return (
    <main className="mt-28">
      <AboutComponent />
      <CardsComponents />
      <AtuacaoComponent />
      <FraseComponent />
    </main>
  )
}
