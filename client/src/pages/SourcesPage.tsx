import React, {useState} from "react";
import SourceTable from "../components/common/SourceTable";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import Input from "../components/ui/Input";
import useModal from "../hooks/useModal";
import { addSource } from "../services/sourceService";
import Toast from "../components/ui/Toast";

export default function SourcesPage() {
  const [sourceData, setSourceData] = useState<string>();
  const [toast, setToast] = useState({ isVisible: false, message: "", type: "" });
  const {
    isOpen: isOpenAddSourceModal,
    toggleModal: toggleAddSourceModal,
    closeModal: closeAddSourceModal,
  } = useModal();

  const handleAddSource = async () => {
    try {
      const response = await addSource(sourceData);
    } catch (error) {
      console.log(error);
      setToast({isVisible: true, message: "error", type: "error"})
    }
  };

  return (
    <div className="flex flex-col gap mt-4">
      <div className="flex items-center justify-between">
        <div className="font-bold text-2xl">Источники</div>
        <Button
          title="Добавить источник"
          onClick={toggleAddSourceModal}
          type={2}
        />
      </div>
      <SourceTable />
      <Modal
        title="Добавление источника данных"
        isOpen={isOpenAddSourceModal}
        onClose={closeAddSourceModal}
      >
        <Input label="Источник данных" placeholder="Источник данных" className="w-full align-items justify-center" onChange={setSourceData} value={sourceData}/>
        <Button title="Добавить" onClick={handleAddSource} className="w-full align-items justify-center mt-4"/>
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
