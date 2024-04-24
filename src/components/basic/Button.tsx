import React from 'react'

interface Props {
  text: string;
}

const Button = ({ text }: Props) => {
  return (
    <button className="text-xl border-2 border-secondary dark:border-white rounded-full w-32 py-3 hover:bg-secondary dark:hover:bg-white active:bg-secondary dark:active:bg-white hover:text-white dark:hover:text-secondary active:text-white dark:active:text-secondary transition-colors">{text}</button>
  )
}

export default Button



