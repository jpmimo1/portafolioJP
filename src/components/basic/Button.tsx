import React from 'react'

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="text-xl border-2 border-secondary rounded-full w-32 py-3 hover:bg-secondary active:bg-secondary hover:text-white active:text-white transition-colors">{text}</button>
  )
}

export default Button



