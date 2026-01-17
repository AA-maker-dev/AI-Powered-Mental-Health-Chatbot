const express = require('express');
const router = express.Router();

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

module.exports = router;