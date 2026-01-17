import React, { useState, useEffect } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  const [activeTab, setActiveTab] = useState('chat');
  const [userMood, setUserMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  useEffect(() => {
    // Load mood history from localStorage
    const savedMoodHistory = localStorage.getItem('moodHistory');
    if (savedMoodHistory) {
      setMoodHistory(JSON.parse(savedMoodHistory));
    }
  }, []);

  const handleMoodUpdate = (mood) => {
    setUserMood(mood);
    const newMoodEntry = {
      mood,
      timestamp: new Date().toISOString()
    };
    const updatedHistory = [...moodHistory, newMoodEntry];
    setMoodHistory(updatedHistory);
    localStorage.setItem('moodHistory', JSON.stringify(updatedHistory));
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <ChatWindow 
          activeTab={activeTab} 
          userMood={userMood} 
          onMoodUpdate={handleMoodUpdate}
          moodHistory={moodHistory}
        />
      </div>
    </div>
  );
}

export default App;