import React from 'react'
import { temp } from '../../store/temp'

type Props = {}

export default function TemplatesPage({}: Props) {
  const data = temp;
  return (
    <div className='flex flex-col'>
      {
        temp && temp.map((t) => (
          <div className="font-base">{t.id}</div>
        ))
      }
    </div>
  )
}