import React, {useState, useMemo, useCallback, useEffect} from 'react'
import Button from '../ui/Button'
import { getSources } from '../../services/sourceService';
import { Source } from '../../types/Sourse';
import useModal from '../../hooks/useModal';
import Modal from '../ui/Modal';
import JsonView from '@uiw/react-json-view';
import { lightTheme } from '@uiw/react-json-view/light';

type Props = {}

export default function SourceTable({}: Props) {
  const [sources, setSources] = useState<Source[]>();
  const [selectedSource, setSelectedSource] = useState<Source>();
  
  const {
    isOpen: isOpenSourceModal,
    openModal: openSourceModal,
    closeModal: closeSourceModal,
  } = useModal();

  const handleOpenModal = (source: Source) => {
    setSelectedSource(source);
    openSourceModal();
  };

  useEffect(() => {
    const fetchSources = async () => {
      try {
        const data = await getSources();   
        console.log(data);     
        setSources(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSources();
  }, []);

  return (
    <div className="flex flex-col gap mt-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">Источники</div>
        <Button title='Добавить источник' onClick={() => console.log('add')} type={2} />
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
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                </tr>
            </thead>
            <tbody>
              {
                sources && sources.map((source: Source) => (
                  <tr key={source.id} className="bg-white text-gray-400 border-b">
                      <td scope="row" className="px-6 py-4">
                        {source.id}
                      </td>
                      <td className="px-6 py-4 cursor-pointer" onClick={() => handleOpenModal(source)}>
                        Открыть
                      </td>
                      <td className="px-6 py-4">
                        time
                      </td>
                  </tr>
                )) 
              }
            </tbody>
          </table>
        </div>
      </div>
      <Modal title="Данные" isOpen={isOpenSourceModal} onClose={closeSourceModal}>
      {selectedSource && (
        isOpenSourceModal && (<JsonView value={selectedSource.data} />) 
      )}
      </Modal>
    </div>
  )
}