import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

type Props = {}

const FormBlogComponents = (props: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 w-1/2">
      <div className="flex flex-col gap-2 relative items-center justify-center">
        <label htmlFor="image" className="text-zinc-400 absolute right-4 ">
          {' '}
          Coloque a imagem do artigo
        </label>
        <input
          type="file"
          className="border py-3 px-4 w-full absolute left-0"
          {...register('image', { required: true })}
          placeholder="Ensira a imagem do artigo"
        />
      </div>
      <input
        className="border py-3 px-4 w-full"
        {...register('title', { required: true })}
        placeholder="Escreva o título do artigo"
      />
      <select
        className="border py-3 px-4 w-full "
        {...register('category', { required: true })}
      >
        <option>Selecione a categoria do artigo</option>
        <option>Selecione uma categoria</option>
        <option>Selecione uma categoria</option>
        <option>Selecione uma categoria</option>
      </select>
      <textarea
        className="border py-3 px-4 w-full"
        {...register('description', { required: true })}
        placeholder="Escreva o conteúdo do artigo"
      />
      <button className="bg-amber-500 py-3 px-4 text-white w-full" aria-labelledby='Botão para registrar'>Registrar</button>
    </form>
  )
}

export default FormBlogComponents
