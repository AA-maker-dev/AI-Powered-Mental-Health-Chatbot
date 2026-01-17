import React from 'react';
import '../styles/ResourcesTab.css';

function ResourcesTab() {
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

  return (
    <div className="resources-tab">
      <div className="resources-header">
        <h2>Mental Health Resources</h2>
        <p>Explore helpful articles, guides, and tips for your wellbeing</p>
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