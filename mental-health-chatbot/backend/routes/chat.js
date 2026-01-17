const express = require('express');
const router = express.Router();
const chatbot = require('../utils/chatbot');

// Main chat endpoint
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const reply = await chatbot.getResponse(message);
    
    res.json({
      message: message,
      reply: reply,
      timestamp: new Date()
    });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Error processing message' });
  }
});

module.exports = router;