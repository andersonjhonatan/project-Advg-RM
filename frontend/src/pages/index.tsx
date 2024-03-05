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
        <title className="transition-all ease-in-out duration-300 ">
          Home - Rosa Muniz | Advogada
        </title>
        <link rel="icon" href="/SIMBOLO.png" />
        <meta
          name="description"
          content="Conheça os serviços jurídicos da Advogada Rosa Muniz. Atuação especializada, valores sólidos e compromisso com os clientes. Entre em contato para obter assistência legal."
        />
      </Head>
      <AboutComponent />
      <CardsComponents />
      <FraseComponent />
      <AtuacaoComponent />
      <ContatoCompoent />
      <ValoresComponent />
     {/*  <CardsBlogComponent /> */}
    </main>
  )
}
