import { GrTarget } from 'react-icons/gr'
import { MdOutlineVisibility } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa'

export interface IValores {
  title: string
  content: string
  icon: JSX.Element
}

export const Valores: IValores[] = [
  {
    title: 'Missão',
    icon: <GrTarget />,
    content:
      'Buscar incansavelmente por Justiça, dedicando-nos com firmeza e determinação, utilizando uma variedade de estratégias e recursos na defesa dos direitos previdenciários.',
  },
  {
    title: 'Visão',
    icon: <MdOutlineVisibility />,
    content:
      'Impactar positivamente vidas, defendendo de forma abrangente o Direito Previdenciário em oposição ao poder regulatório estatal, com o propósito de promover segurança financeira e transformar o futuro de nossos clientes.',
  },
  {
    title: 'Valores',
    icon: <FaRegHeart />,
    content:
      'Ética, transparência, comprometimento, respeito, integridade, proteção, empatia, dedicação, confiança e coragem, guiando-nos no compromisso constante de preservar e promover os direitos previdenciários de nossos clientes.',
  },
]