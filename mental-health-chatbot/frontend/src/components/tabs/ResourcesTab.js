import React, { useState } from 'react';
import '../styles/ResourcesTab.css';

function ResourcesTab() {
  const [aiRecommendation, setAiRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    {
      id: 1,
      title: 'Understanding Anxiety',
      description: 'Learn about anxiety disorders and effective coping strategies.',
      category: 'Mental Health',
      icon: '📖'
    },
    {
      id: 2,
      title: 'Meditation for Beginners',
      description: 'Simple meditation techniques to reduce stress and improve focus.',
      category: 'Wellness',
      icon: '🧘'
    },
    {
      id: 3,
      title: 'Sleep Better Tonight',
      description: 'Evidence-based tips for improving sleep quality.',
      category: 'Sleep',
      icon: '😴'
    },
    {
      id: 4,
      title: 'Building Healthy Habits',
      description: 'Create sustainable habits that improve mental wellbeing.',
      category: 'Lifestyle',
      icon: '💪'
    },
    {
      id: 5,
      title: 'Stress Management Guide',
      description: 'Practical techniques to manage daily stress.',
      category: 'Stress',
      icon: '🎯'
    },
    {
      id: 6,
      title: 'Social Connection Tips',
      description: 'Strengthen relationships and combat loneliness.',
      category: 'Social',
      icon: '🤝'
    }
  ];

  const getAIRecommendation = async () => {
    if (!searchQuery.trim()) {
      alert('Please enter what you need help with');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/resources/personalized', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          topic: searchQuery
        }),
      });

      const data = await response.json();
      setAiRecommendation(data.recommendation);
    } catch (error) {
      console.error('Error getting AI recommendation:', error);
      setAiRecommendation('Unable to get recommendation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="resources-tab">
      <div className="resources-header">
        <h2>Mental Health Resources</h2>
        <p>Explore helpful articles, guides, and tips for your wellbeing</p>
      </div>

      {/* AI-Powered Personalized Recommendation Section */}
      <div className="ai-recommendation-section">
        <h3>🤖 Get Personalized AI Recommendations</h3>
        <p>Tell us what you need help with, and our AI will provide personalized guidance</p>
        
        <div className="ai-search-box">
          <input
            type="text"
            placeholder="e.g., managing stress, improving sleep, dealing with anxiety..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && getAIRecommendation()}
          />
          <button 
            onClick={getAIRecommendation}
            disabled={loading}
          >
            {loading ? 'Thinking...' : 'Get AI Help'}
          </button>
        </div>

        {aiRecommendation && (
          <div className="ai-recommendation-result">
            <div className="recommendation-icon">💡</div>
            <p>{aiRecommendation}</p>
          </div>
        )}
      </div>

      <div className="resources-grid">
        {resources.map((resource) => (
          <div key={resource.id} className="resource-card">
            <div className="resource-icon">{resource.icon}</div>
            <div className="resource-category">{resource.category}</div>
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <button className="read-more-btn">Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResourcesTab;