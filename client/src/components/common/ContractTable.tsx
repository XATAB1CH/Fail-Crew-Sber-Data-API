import React, { useState, useMemo, useCallback, useEffect } from "react";
import Button from "../ui/Button";
import { getSources } from "../../services/sourceService";
import { Source } from "../../types/Sourse";
import useModal from "../../hooks/useModal";
import Modal from "../ui/Modal";
import JsonView from "@uiw/react-json-view";
import { getContracts } from "../../services/contractService";

type Props = {};

export default function ContractTable({}: Props) {
  const [contracts, setContracts] = useState<any[]>();
  const [selectedContract, setSelectedContract] = useState<any>();
  const [parseSelectedContract, setParseSelectedContract] = useState<any>();

  const {
    isOpen: isOpenContractModal,
    toggleModal: toggleContractModal,
    closeModal: closeContractModal,
  } = useModal();

  const handleOpenModal = (source: Source) => {
    setSelectedContract(source);
    toggleContractModal();
  };

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const data = await getContracts();
        console.log(data);
        setContracts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchContracts();
  }, []);

  return (
    <div className="rounded-lg shadow-md p-4 mt-4 bg-white flex flex-col">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-white border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                title
              </th>
              <th scope="col" className="px-6 py-3">
                Данные
              </th>
            </tr>
          </thead>
          <tbody>
            {contracts &&
              contracts.map((contract) => (
                <tr
                  key={contract.id}
                  className="bg-white text-gray-600 border-b"
                >
                  <td scope="row" className="px-6 py-4">
                    {contract.title}
                  </td>
                  <td
                    className="px-6 py-4 cursor-pointer"
                    onClick={() => handleOpenModal(contract)}
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
        isOpen={isOpenContractModal}
        onClose={closeContractModal}
      >
        {selectedContract && isOpenContractModal && (
          <JsonView value={selectedContract} />
        )}
        <div className="mt-4 border-b">
            

        </div>
      </Modal>
    </div>
  );
}
