import React from 'react'
import FormBlogComponents from '../../../components/adm/FormBlogComponents'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Roboto, Righteous } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({ weight: '500', subsets: ['latin'] })
const righteous = Righteous({ weight: '400', subsets: ['latin'] })

const AdmComponent = () => {
  return (
    <div className="pt-44">
      <Head>
        <title>Página de administrador</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Página de administração para adicionar novos artigos ao blog."
        />
      </Head>
      <div
        className="h-[calc(100vh-64px)]  w-screen
      "
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full relative bg-white">
          <h1 className={`${roboto.className} text-3xl text-black absolute top-14`}>
            Registre seu artigo !
          </h1>
          <FormBlogComponents />
        </div>
      </div>
    </div>
  )
}

export default AdmComponent
