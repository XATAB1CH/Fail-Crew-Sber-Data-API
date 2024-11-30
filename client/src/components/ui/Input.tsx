import React from 'react'

type InputProps = {
  placeholder: string,
  onChange: () => void;
  type: string;
};

export default function Input({placeholder, onChange, type = "text"}: InputProps) {
  return (
    <input type={type} placeholder='' onChange={onChange} />
  )
};