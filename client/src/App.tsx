import React from 'react';
import Button from './components/ui/Button';
import Source from './components/common/Source';
import Fields from './components/common/Fields';

function App() {
  return (
    <div className="max-w-[1200px] mx-auto mx-auto h-full w-full">
      <div className="flex flex-col gap-4">
        <Source />
        <Fields />
      </div>
    </div>
    
  );
}

export default App;
