import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SourcesPage from "./pages/SourcesPage";
import TemplatesPage from "./pages/Templates/TemplatesPage";
import TemplateDetails from "./pages/Templates/TemplateDetails";
import ContractsPage from "./pages/Contracts/ContractsPage";
import ContractDetails from "./pages/Contracts/ContractDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="mt-6 max-w-[1200px] mx-auto justify-center items-center h-max">
        <div className="flex gap-2">
          <a href="/sources" className="font-xl">
            Источники
          </a>
          <a href="/contracts" className="font-xl">
            Контракты
          </a>
          <a href="/templates/1" className="font-xl">
            Шаблон
          </a>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sources" element={<SourcesPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/:templateId" element={<TemplateDetails />} />

          <Route path="/contracts" element={<ContractsPage />} />
          <Route path="/contracts/:contractId" element={<ContractDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
