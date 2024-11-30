import React, {useState, useMemo, useCallback} from 'react'
import Button from '../ui/Button'
import Dropdown from '../ui/Dropdown';
import parseJSON from '../../utils/parseJson';

type Props = {}

export default function Source({}: Props) {
  const addSource = () => {

  };

  return (
    <div className="flex flex-col gap mt-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">Источники</div>
        <Button title='Добавить источник' onClick={addSource} type={2} />
      </div>
      <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col">
      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-white border-b">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Данные
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white text-gray-400 border-b">
                      <td scope="row" className="px-6 py-4">
                          Источник 1
                      </td>
                      <td className="px-6 py-4">
                        <a href="">
                          дрын
                        </a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>

      </div>
    </div>
  )
}