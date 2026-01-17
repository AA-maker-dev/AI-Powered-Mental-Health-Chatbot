import React from 'react';
import './Sidebar.css';

function Sidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'chat', label: 'Chat', icon: '💬' },
    { id: 'mood', label: 'Mood Tracker', icon: '😊' },
    { id: 'resources', label: 'Resources', icon: '📚' },
    { id: 'emergency', label: 'Emergency', icon: '🚨' }
  ];

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="nav-icon">{tab.icon}</span>
            <span className="nav-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;