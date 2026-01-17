const express = require('express');
const router = express.Router();

const moodTips = {
  sad: [
    'It\'s okay to feel sad. Consider reaching out to someone you trust.',
    'Try engaging in an activity you enjoy, even if it\'s just for 10 minutes.',
    'Remember that this feeling is temporary and will pass.'
  ],
  anxious: [
    'Try deep breathing exercises: breathe in for 4, hold for 4, exhale for 4.',
    'Grounding techniques can help: name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.',
    'Movement can help reduce anxiety. Consider a short walk or light exercise.'
  ],
  neutral: [
    'You\'re maintaining balance. Keep nurturing what makes you feel good.',
    'Today is a good day to establish healthy habits.',
    'Remember self-care is important even when you feel neutral.'
  ],
  good: [
    'Great to hear! Keep doing what makes you feel good.',
    'This is a good time to set positive goals for yourself.',
    'Share your positive energy with others around you.'
  ],
  great: [
    'Wonderful! Celebrate this moment and acknowledge what\'s helping you feel great.',
    'This is a perfect time to help others who might be struggling.',
    'Keep building on these positive feelings.'
  ]
};

// Get mood tips
router.get('/tips/:mood', (req, res) => {
  const { mood } = req.params;
  const tips = moodTips[mood.toLowerCase()] || moodTips.neutral;
  
  res.json({
    mood,
    tips,
    count: tips.length
  });
});

// Store mood entry
router.post('/log', (req, res) => {
  const { mood, note } = req.body;
  
  if (!mood) {
    return res.status(400).json({ error: 'Mood is required' });
  }

  const moodEntry = {
    mood,
    note: note || '',
    timestamp: new Date(),
    id: Date.now()
  };

  // In a real app, this would be saved to a database
  res.json({
    success: true,
    data: moodEntry,
    tip: moodTips[mood.toLowerCase()]?.[0] || 'Take care of yourself!'
  });
});

module.exports = router;