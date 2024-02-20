import AboutComponent from '@/components/AboutComponent'
import AtuacaoComponent from '@/components/Atuacao'
import CardsComponents from '@/components/CardsComponents'
import ContatoCompoent from '@/components/ContatoCompoent'
import FraseComponent from '@/components/FraseComponent'
import ValoresComponent from '@/components/ValoresComponent'

export default function Home() {
  return (
    <main className="mt-28">
      <AboutComponent />
      <CardsComponents />
      <ValoresComponent />
      <AtuacaoComponent />
      <FraseComponent />
      <ContatoCompoent />
    </main>
  )
}
