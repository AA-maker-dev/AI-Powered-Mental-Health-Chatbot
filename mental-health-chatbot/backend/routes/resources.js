const express = require('express');
const router = express.Router();
const axios = require('axios');

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL || 'mistral';

const resources = [
  {
    id: 1,
    title: 'Understanding Anxiety Disorders',
    description: 'Learn about different types of anxiety disorders and evidence-based treatment options.',
    category: 'Mental Health',
    link: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/anxiety-and-panic-attacks/'
  },
  {
    id: 2,
    title: 'Meditation for Beginners',
    description: 'A comprehensive guide to starting a meditation practice for mental health.',
    category: 'Wellness',
    link: 'https://www.headspace.com/work/meditation'
  },
  {
    id: 3,
    title: 'Sleep Better Tonight',
    description: 'Evidence-based techniques to improve sleep quality and manage insomnia.',
    category: 'Sleep',
    link: 'https://www.sleepfoundation.org/sleep-hygiene'
  },
  {
    id: 4,
    title: 'Building Healthy Habits',
    description: 'Create sustainable habits that improve mental and physical wellbeing.',
    category: 'Lifestyle',
    link: 'https://www.verywellmind.com/habit-formation-3288897'
  },
  {
    id: 5,
    title: 'Stress Management Techniques',
    description: 'Practical techniques to manage daily stress and prevent burnout.',
    category: 'Stress',
    link: 'https://www.apa.org/topics/stress'
  },
  {
    id: 6,
    title: 'Social Connection Tips',
    description: 'Build and maintain meaningful relationships for better mental health.',
    category: 'Social',
    link: 'https://www.apa.org/science/about/psa/social-connection'
  }
];

// Get all resources
router.get('/', (req, res) => {
  res.json({
    total: resources.length,
    resources: resources
  });
});

// Get resources by category
router.get('/category/:category', (req, res) => {
  const { category } = req.params;
  const filtered = resources.filter(r => r.category.toLowerCase() === category.toLowerCase());
  
  res.json({
    category,
    count: filtered.length,
    resources: filtered
  });
});

// Get single resource
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const resource = resources.find(r => r.id === parseInt(id));
  
  if (!resource) {
    return res.status(404).json({ error: 'Resource not found' });
  }

  res.json(resource);
});

// AI-powered personalized resource recommendations
router.post('/personalized', async (req, res) => {
  try {
    const { topic, mood, concern } = req.body;
    
    if (!topic && !mood && !concern) {
      return res.status(400).json({ error: 'Please provide at least one of: topic, mood, or concern' });
    }

    const prompt = `As a mental health resource expert, provide a brief, helpful recommendation for someone who is ${mood ? `feeling ${mood}` : ''} ${concern ? `concerned about ${concern}` : ''} ${topic ? `interested in learning about ${topic}` : ''}. 

Provide:
1. A supportive opening statement (1 sentence)
2. One specific actionable tip or technique they can try right now
3. Why this helps (1 sentence)

Keep it concise and encouraging. Format as plain text, no bullet points.`;

    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: MODEL,
      prompt: prompt,
      stream: false,
      options: {
        temperature: 0.7,
        num_predict: 200
      }
    });

    res.json({
      recommendation: response.data.response.trim(),
      matchedResources: resources.filter(r => {
        const searchTerm = (topic || mood || concern || '').toLowerCase();
        return r.title.toLowerCase().includes(searchTerm) || 
               r.description.toLowerCase().includes(searchTerm) ||
               r.category.toLowerCase().includes(searchTerm);
      }).slice(0, 3)
    });
  } catch (error) {
    console.error('AI Recommendation Error:', error);
    res.status(500).json({ error: 'Unable to generate recommendation' });
  }
});

module.exports = router;