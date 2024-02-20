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
      <input {...register('phone', { required: true })} placeholder="Telefone" />
      <input {...register('email', { required: true })} placeholder="Seu Email" />
      <textarea {...register('message', { required: true })} placeholder="Mensagem" />
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormComponent
