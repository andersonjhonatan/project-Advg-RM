import FooterComponent from '@/components/FooterComponent'
import HeaderComponent from '@/components/HeaderComponent'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body>
        <HeaderComponent />
        <Main />
        <NextScript />
        <FooterComponent />
      </body>
    </Html>
  )
}
