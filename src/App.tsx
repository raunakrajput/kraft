import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { StrategyStudio } from './components/StrategyStudio';
import { CreatorStudio } from './components/CreatorStudio';
import { Simulations } from './components/Simulations';
import { AgentManagement } from './components/AgentManagement';
import { PerformanceCockpit } from './components/PerformanceCockpit';
import { AdminControls } from './components/AdminControls';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'strategy':
        return <StrategyStudio />;
      case 'dashboard':
        return <Dashboard />;
      case 'creator':
        return <CreatorStudio />;
      case 'simulations':
        return <Simulations />;
      case 'agents':
        return <AgentManagement />;
      case 'performance':
        return <PerformanceCockpit />;
      case 'admin':
        return <AdminControls />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;