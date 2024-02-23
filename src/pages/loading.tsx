'use client'
import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";


type Props = {}

const Loading = (props: Props) => {
  return (
    <div>
      <AiOutlineLoading className="text-[var(--primary-color)] animate-spin duration-300 ease-in-out h-48  " />
    </div>
  )
}

export default Loading
