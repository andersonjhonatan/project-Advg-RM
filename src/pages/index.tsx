import AboutComponent from '@/components/AboutComponent'
import AtuacaoComponent from '@/components/Atuacao'
import CardsComponents from '@/components/CardsComponents'
import FraseComponent from '@/components/FraseComponent'

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
