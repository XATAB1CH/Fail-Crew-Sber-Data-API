import React, { useState, useMemo, useCallback, useEffect } from "react";
import Button from "../ui/Button";
import { getSources } from "../../services/sourceService";
import { Source } from "../../types/Sourse";
import useModal from "../../hooks/useModal";
import Modal from "../ui/Modal";
import JsonView from "@uiw/react-json-view";

type Props = {};

export default function SourceTable({}: Props) {
  const [sources, setSources] = useState<Source[]>();
  const [selectedSource, setSelectedSource] = useState<Source>();

  const {
    isOpen: isOpenSourceModal,
    toggleModal: toggleSourceModal,
    closeModal: closeSourceModal,
  } = useModal();

  const handleOpenModal = (source: Source) => {
    setSelectedSource(source);
    toggleSourceModal();
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
    <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Данные
              </th>
            </tr>
          </thead>
          <tbody>
            {sources &&
              sources.map((source: Source) => (
                <tr key={source.id} className="bg-white text-gray-400 border-b">
                  <td scope="row" className="px-6 py-4">
                    {source.id}
                  </td>
                  <td
                    className="px-6 py-4 cursor-pointer"
                    onClick={() => handleOpenModal(source)}
                  >
                    Открыть
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal
        title="Данные"
        isOpen={isOpenSourceModal}
        onClose={closeSourceModal}
      >
        {selectedSource && isOpenSourceModal && (
          <JsonView value={selectedSource.data} />
        )}
      </Modal>
    </div>
  );
}
