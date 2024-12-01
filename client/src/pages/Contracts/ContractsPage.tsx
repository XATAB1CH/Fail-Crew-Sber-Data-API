import React, { useState, useEffect } from "react";
import ContractTable from "../../components/common/ContractTable";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Toast from "../../components/ui/Toast";
import useModal from "../../hooks/useModal";
import { addContract } from "../../services/contractService";

type Props = {};

export default function ContractsPage({}: Props) {
  const [schemeData, setSchemeData] = useState<string>();
  const [toast, setToast] = useState({
    isVisible: false,
    message: "",
    type: "",
  });
  const {
    isOpen: isOpenAddSourceModal,
    toggleModal: toggleAddSourceModal,
    closeModal: closeAddSourceModal,
  } = useModal();

  const handleAddScheme = async () => {
    try {
      const response = await addContract(schemeData);
    } catch (error) {
      console.log(error);
      setToast({ isVisible: true, message: "error", type: "error" });
    }
  };

  return (
    <div className="flex flex-col gap mt-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">Контракты</div>
        <Button
          title="Добавить контракт"
          onClick={toggleAddSourceModal}
          type={2}
        />
      </div>
      <ContractTable />
      <Modal
        title="Добавление контракта"
        isOpen={isOpenAddSourceModal}
        onClose={closeAddSourceModal}
      >
        <Input
          label="Схема данных"
          placeholder="Схема данных"
          className="w-full align-items justify-center"
          onChange={() => setSchemeData}
          value={schemeData}
        />
        <Button
          title="Добавить"
          onClick={handleAddScheme}
          className="w-full align-items justify-center mt-4"
        />
      </Modal>
      {toast.isVisible && (
        <Toast
          message={toast.message}
          type={toast.type as "success" | "error" | "info"}
          onClose={() => setToast({ isVisible: false, message: "", type: "" })}
        />
      )}
    </div>
  );
}
