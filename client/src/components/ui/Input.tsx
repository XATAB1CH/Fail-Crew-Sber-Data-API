import React from 'react'

type InputProps = {
  label: string,
  placeholder: string,
  onChange: (value: string) => void;
  type?: string;
  value?: string;
  className?: any;
};

export default function Input({label, placeholder, onChange, type = "text", value = "", className=""}: InputProps) {
  return (
    <div className="relative">
      <label htmlFor="dropdown" className="block text-md font-medium text-gray-700">
        {label}
      </label>
      <input className={`mt-1 px-4 py-2 bg-white border border-primary rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary ${className}`}
        type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
};