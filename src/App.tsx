import React from 'react';
import './tailwind.css';
import './App.css';
import LeftPanel from './components/panels/LeftPanel';
import RightPanel from './components/panels/RightPanel';

const App: React.FC = () => {
  return (
      <div className="flex h-[100vh]">
        <LeftPanel />
        <RightPanel />
    </div>
  );
}

export default App;
