import React, {ReactNode} from 'react'

type ModalProps = {
  title: string,
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({title, isOpen, onClose, children}: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 shadow-lg flex items-center justify-center z-50">
      <div className="rounded-lg p-6 shadow-lg w-full bg-[#fff] max-w-md relative">
        <div className="flex justify-between items-center mb-3">
          <div className="font-bold text-2xl">{title}</div>
          <div className="p-3 bg-block rounded-md cursor-pointer" onClick={onClose}>
            <div className="icon w-3 bg-primary" style={{ maskImage: 'url("/close.svg")' }}></div>
          </div>
        </div>
        <div className="overflow-y-auto h-64">
          {children}
        </div>
      </div>
    </div>
  )
}