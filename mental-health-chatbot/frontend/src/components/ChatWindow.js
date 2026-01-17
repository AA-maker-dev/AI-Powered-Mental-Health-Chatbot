import React, { useState, useEffect, useRef } from 'react';
import './ChatWindow.css';
import ChatTab from './tabs/ChatTab';
import MoodTab from './tabs/MoodTab';
import ResourcesTab from './tabs/ResourcesTab';
import EmergencyTab from './tabs/EmergencyTab';

function ChatWindow({ activeTab, userMood, onMoodUpdate, moodHistory }) {
  return (
    <div className="chat-window">
      {activeTab === 'chat' && <ChatTab userMood={userMood} />}
      {activeTab === 'mood' && <MoodTab onMoodUpdate={onMoodUpdate} moodHistory={moodHistory} />}
      {activeTab === 'resources' && <ResourcesTab />}
      {activeTab === 'emergency' && <EmergencyTab />}
    </div>
  );
}

export default ChatWindow;