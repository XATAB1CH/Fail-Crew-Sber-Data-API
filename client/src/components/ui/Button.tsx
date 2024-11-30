import React from 'react'

enum ButtonType {
  OUTLINE = 1,
  SOLID = 2,
};

type ButtonProps = {
    title: string,
    onClick: () => void,
    type?: ButtonType,
    img?: string,
};

export default function Button({title, onClick, img='none', type=ButtonType.SOLID}: ButtonProps) {
  const buttonStyles = type === ButtonType.SOLID ? 
  'bg-primary text-white' 
  : 
  'border border-primary text-primary bg-transparent'; 

  const svgStyles =
    type === ButtonType.SOLID ? 'fill-white' : 'fill-primary';

  return (
    <button className={`rounded-lg bg-primary px-4 py-2 flex gap-1 ${buttonStyles} `} onClick={onClick}>
      {/* <img src='/plus.svg' className={`${svgStyles} fill-current  `} alt="icon" /> */}
        {title}
      </button>
  )
};