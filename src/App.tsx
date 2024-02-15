import React from 'react';
import LeftPanel from './components/panels/LeftPanel';
import RightPanel from './components/panels/RightPanel';
import './tailwind.css';
import './App.css';

const App: React.FC = () => {
  return (
      <div className="flex flex-col sm:max-md:flex-col xl:flex-row xl:items-center h-full">
        <LeftPanel />
        <RightPanel />
    </div>
  );
}

export default App;
