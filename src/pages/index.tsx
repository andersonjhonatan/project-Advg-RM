import AboutComponent from '@/components/AboutComponent'
import AtuacaoComponent from '@/components/Atuacao'
import CardsBlogComponent from '@/components/CardsBlog'
import CardsComponents from '@/components/CardsComponents'
import ContatoCompoent from '@/components/ContatoCompoent'
import FraseComponent from '@/components/FraseComponent'
import ValoresComponent from '@/components/ValoresComponent'
import Head from 'next/head'

export default function Home() {
  return (
    <main className="mt-28">
      <Head>
        <title>Rosa Muniz - Advoc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutComponent />
      <CardsComponents />
      <FraseComponent />
      <AtuacaoComponent />
      <ContatoCompoent />
      <ValoresComponent />
      <CardsBlogComponent />
    </main>
  )
}
