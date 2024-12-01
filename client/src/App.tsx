import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Button from './components/ui/Button';
import Source from './components/common/SourceTable';
import Fields from './components/common/Fields';
import MainPage from './pages/MainPage';
import SourcesPage from './pages/SourcesPage';
import TemplatesPage from './pages/Templates/TemplatesPage';
import TemplateDetails from './pages/Templates/TemplateDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="mt-6 max-w-[1200px] mx-auto justify-center items-center">
        <div className="flex gap-2">
          <a href="/sources" className='font-base'>Источники</a>
          <a href="/templates" className='font-base'>Шаблоны</a>
        </div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/sources' element={<SourcesPage />} />
          <Route path='/templates' element={<TemplatesPage />} />
          <Route path='/templates/:templateId' element={<TemplateDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
