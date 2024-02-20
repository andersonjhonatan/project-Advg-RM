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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name', { required: true })} placeholder="Seu Nome" />
      {errors.name && <span>Este campo é obrigatório</span>}
      <input {...register('phone', { required: true })} placeholder="Telefone" />
      {errors.phone && <span>Este campo é obrigatório</span>}
      <input {...register('email', { required: true })} placeholder="Seu Email" />
      {errors.email && <span>Este campo é obrigatório</span>}
      <textarea {...register('message', { required: true })} placeholder="Mensagem" />
      {errors.message && <span>Este campo é obrigatório</span>}
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormComponent
