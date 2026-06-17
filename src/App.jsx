import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import IssuesReport from './pages/IssuesReport';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-slate-50">
      {activePage === 'dashboard' ? (
        <Dashboard onReportClick={() => setActivePage('issues')} />
      ) : (
        <IssuesReport onBackClick={() => setActivePage('dashboard')} />
      )}
    </div>
  );
}

export default App;
