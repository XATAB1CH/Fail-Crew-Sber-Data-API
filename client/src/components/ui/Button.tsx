import React from 'react'

type ButtonProps = {
    title: string,
    onClick: () => void;
};

export default function Button({title, onClick}: ButtonProps) {
  return (
    <button onClick={onClick}>{title}</button>
  )
};