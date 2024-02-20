import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

type Props = {}

const FormComponent = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div className="flex w-full justify-between gap-4">
        <section className="w-1/2">
          <input
            {...register('name', { required: true })}
            placeholder="Seu Nome"
            className="border-b py-3 px-4 w-full"
          />
          <p className="text-red-500 mt-2">
            {errors.name && <span>Este campo é obrigatório</span>}
          </p>
        </section>
        <section className="w-1/2">
          <input
            {...register('phone', { required: true })}
            placeholder="Telefone"
            className="border-b py-3 px-4 w-full"
          />
          <p className="text-red-500 mt-2">
            {errors.phone && <span>Este campo é obrigatório</span>}
          </p>
        </section>
      </div>
      <div className="flex flex-col gap-8">
        <section>
          <input
            {...register('email', { required: true })}
            placeholder="Seu Email"
            className="border-b py-3 px-4 w-full"
          />
          <p className="text-red-500 mt-2">
            {errors.email && <span>Este campo é obrigatório</span>}
          </p>
        </section>

        <section>
          <textarea
            {...register('message', { required: true })}
            placeholder="Deixe sua Mensagem aqui..."
            className="border-b py-3 px-4 w-full outline-none"
          />
          <p className="text-red-500 mt-2">
            {errors.message && <span>Este campo é obrigatório</span>}
          </p>
        </section>
      </div>
      <button type="submit" className='bg-amber-300 text-black py-2 w-56 rounded'>Enviar</button>
    </form>
  )
}

export default FormComponent
