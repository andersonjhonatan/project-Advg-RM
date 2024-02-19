import React from 'react'

interface ICards {
  title: string
  content: string
}

const cards: ICards[] = [
  {
    title: ' Abordagem Proativa e Empática',
    content:
      'Comprometemo-nos a adotar uma abordagem proativa em todos os casos que assumimos, combatendo ativamente o encarceramento e buscando a aplicação da lei em benefício do melhor interesse do cliente, sempre com empatia.',
  },
  {
    title: 'Integridade e Clareza',
    content:
      'Nossa atuação é pautada pela integridade e pela comunicação transparente; garantimos que nossos clientes estejam sempre informados sobre todas as informações e decisões relacionadas ao seu caso.',
  },
  {
    title: 'Acompanhamento Personalizado e Eficiente',
    content:
      'Realizamos uma verificação diária de todos os processos, mantendo nossos clientes atualizados regularmente sobre as movimentações processuais de forma personalizada e eficiente.',
  },
  {
    title: 'Atendimento Virtual e Presencial',
    content:
      'Priorizamos o atendimento online para oferecer rapidez e praticidade, mas também disponibilizamos a opção de encontros presenciais em nosso endereço. Em todas as interações, você terá a oportunidade de dialogar diretamente com um advogado',
  },
]

const CardsComponents = () => {
  return (
    <div className="w-full items-center flex flex-col px-20">
      <div className="text-3xl text-white p-12">
        <p className="text-center italic text-black">Por que me escolher? </p>
        <p className="text-center font-semibold text-black">Experiência e dedicação ao cliente!</p>
      </div>
      <div className="grid grid-cols-4 gap-4 place-items-stretch ">
        {cards.map((card: ICards, index) => (
          <div
            className="flex flex-col border border-white bg-zinc-200 text-black rounded-md shadow-700 gap-4 p-8 justify-evenly items-center "
            key={index}
          >
            <h1 className="text-3xl">{card.title}</h1>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsComponents
