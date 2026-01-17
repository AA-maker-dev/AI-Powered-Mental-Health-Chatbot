const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const chatRoutes = require('./routes/chat');
const moodRoutes = require('./routes/mood');
const resourceRoutes = require('./routes/resources');

// API Routes
app.use('/api/chat', chatRoutes);
app.use('/api/mood', moodRoutes);
app.use('/api/resources', resourceRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'MindCare API is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🧠 MindCare API running on http://localhost:${PORT}`);
});