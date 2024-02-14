import React from 'react';
import LeftPanel from './components/panels/LeftPanel';
import RightPanel from './components/panels/RightPanel';
import './tailwind.css';
import './App.css';

const App: React.FC = () => {
  return (
      <div className="flex sm:max-xl:flex-col xl:h-screen">
        <LeftPanel />
        <RightPanel />
    </div>
  );
}

export default App;
