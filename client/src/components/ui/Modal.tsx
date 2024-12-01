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
    <div className="fixed inset-0 shadow-xl flex items-center justify-center z-50">
      <div className="rounded-lg shadow-lg w-full bg-[#fff] max-w-md relative h-fit">
        <div className="flex justify-between bg-primary px-3 py-2 rounded-t-lg">
          <div className="font-bold text-lg text-white">{title}</div>
          <div className="p-3 bg-block rounded-md cursor-pointer" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.16 340.16" width="10" height="10" fill='#fff'>
            <path d="m30.92,0C22.72,0,14.85,3.26,9.06,9.06c-12.07,12.08-12.07,31.65,0,43.73l117.29,117.3L9.06,287.37c-12.07,12.08-12.07,31.65,0,43.73,12.08,12.07,31.65,12.07,43.73,0l117.3-117.3,117.29,117.3c12.08,12.07,31.65,12.07,43.73,0,12.07-12.08,12.07-31.65,0-43.73l-117.29-117.29,117.29-117.3c12.07-12.08,12.07-31.65,0-43.73C325.3,3.26,317.44,0,309.24,0c-8.2,0-16.07,3.26-21.87,9.06l-117.29,117.3L52.78,9.06C46.98,3.26,39.12,0,30.92,0Z"/>
          </svg>
          </div>
        </div>
        <div className="p-3 h-fit max-h-60 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  )
}