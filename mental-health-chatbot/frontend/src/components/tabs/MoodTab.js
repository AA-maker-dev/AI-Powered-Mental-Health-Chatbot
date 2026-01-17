import React, { useState } from 'react';
import '../styles/MoodTab.css';

function MoodTab({ onMoodUpdate, moodHistory }) {
  const moods = [
    { emoji: '😢', label: 'Sad', value: 'sad', color: '#FF6B6B' },
    { emoji: '😟', label: 'Anxious', value: 'anxious', color: '#FFA500' },
    { emoji: '😐', label: 'Neutral', value: 'neutral', color: '#FFD93D' },
    { emoji: '🙂', label: 'Good', value: 'good', color: '#6BCB77' },
    { emoji: '😄', label: 'Great', value: 'great', color: '#4D96FF' }
  ];

  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.value);
    onMoodUpdate(mood.value);
  };

  // Calculate mood statistics
  const getMoodStats = () => {
    if (moodHistory.length === 0) return null;
    const counts = {};
    moodHistory.forEach(entry => {
      counts[entry.mood] = (counts[entry.mood] || 0) + 1;
    });
    return counts;
  };

  const stats = getMoodStats();

  return (
    <div className="mood-tab">
      <div className="mood-content">
        <div className="mood-section">
          <h2>How are you feeling today?</h2>
          <p className="mood-description">Your mood helps us provide better support</p>
          
          <div className="mood-selector">
            {moods.map((mood) => (
              <button
                key={mood.value}
                className={`mood-btn ${selectedMood === mood.value ? 'selected' : ''}`}
                onClick={() => handleMoodSelect(mood)}
                style={{
                  borderColor: selectedMood === mood.value ? mood.color : '#e0e0e0',
                  backgroundColor: selectedMood === mood.value ? mood.color + '15' : 'white'
                }}
              >
                <div className="mood-emoji">{mood.emoji}</div>
                <div className="mood-label">{mood.label}</div>
              </button>
            ))}
          </div>

          {selectedMood && (
            <div className="mood-feedback">
              <p>✓ Mood recorded! Keep track of your emotional journey.</p>
            </div>
          )}
        </div>

        {stats && (
          <div className="mood-stats">
            <h3>Your Mood History</h3>
            <p className="stats-subtitle">Last {moodHistory.length} mood entries</p>
            <div className="stats-grid">
              {Object.entries(stats).map(([mood, count]) => {
                const moodObj = moods.find(m => m.value === mood);
                return (
                  <div key={mood} className="stat-item">
                    <div className="stat-emoji">{moodObj.emoji}</div>
                    <div className="stat-info">
                      <div className="stat-label">{moodObj.label}</div>
                      <div className="stat-count">{count} times</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoodTab;