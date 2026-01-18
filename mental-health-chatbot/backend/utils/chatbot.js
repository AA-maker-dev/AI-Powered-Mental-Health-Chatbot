// AI-powered chatbot using Ollama (Local AI - No API keys needed!)
const axios = require('axios');

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const MODEL = process.env.OLLAMA_MODEL || 'mistral';

const systemPrompt = `You are MindCare, a compassionate and supportive mental health chatbot. Your role is to:
- Listen actively and empathetically to users
- Provide supportive and non-judgmental responses
- Offer coping strategies and mental health tips
- Recognize emergency situations and direct users to professional help
- Keep responses concise (2-3 sentences typically)
- Never pretend to be a licensed therapist
- Encourage professional help when needed
- Support users in their mental health journey

Always prioritize user safety and well-being.`;

// Fallback responses for errors
const responses = {
  greetings: {
    patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
    responses: [
      "Hello! I'm glad to meet you. How can I support you today?",
      "Hi there! It's nice to hear from you. What's on your mind?",
      "Hey! Welcome to MindCare. How are you feeling today?"
    ]
  },
  mood: {
    patterns: ['sad', 'depressed', 'down', 'unhappy', 'terrible', 'awful', 'horrible'],
    responses: [
      "I'm sorry you're feeling this way. Remember that these feelings are temporary. Would you like to talk about what's bothering you?",
      "It sounds like you're going through a tough time. I'm here to listen and support you. What's making you feel this way?",
      "Your feelings are valid and important. Let's explore what might help you feel better right now."
    ]
  },
  anxiety: {
    patterns: ['anxious', 'anxiety', 'worried', 'stress', 'nervous', 'panic', 'overwhelmed'],
    responses: [
      "Anxiety can feel overwhelming, but there are effective strategies to manage it. Have you tried deep breathing exercises?",
      "I hear that you're feeling anxious. Try taking a moment to breathe deeply - in for 4, hold for 4, out for 4. It can help calm your mind.",
      "Feeling overwhelmed? Remember that you're in control. Let's break things down into smaller, manageable steps."
    ]
  },
  sleep: {
    patterns: ['sleep', 'insomnia', 'tired', 'fatigue', 'can\'t sleep', 'sleepless'],
    responses: [
      "Sleep is crucial for mental health. Try establishing a consistent sleep schedule and avoiding screens before bed.",
      "Having trouble sleeping? Consider relaxation techniques like progressive muscle relaxation or guided imagery.",
      "Good sleep hygiene includes: consistent bedtime, cool dark room, and limiting caffeine. How are these working for you?"
    ]
  },
  relationships: {
    patterns: ['friend', 'family', 'relationship', 'alone', 'lonely', 'isolated', 'lonely'],
    responses: [
      "Relationships are important for our wellbeing. Is there someone you trust that you can talk to?",
      "Connection with others can be very healing. Have you considered reaching out to someone you care about?",
      "Building and maintaining relationships takes effort, but it's worth it. What support do you need right now?"
    ]
  },
  gratitude: {
    patterns: ['thank', 'thanks', 'thank you', 'appreciate', 'grateful'],
    responses: [
      "You're welcome! I'm here to help. Is there anything else you'd like to talk about?",
      "Happy to help! Remember to take care of yourself. Anything else on your mind?",
      "That's kind of you to say. How else can I support you today?"
    ]
  },
  positive: {
    patterns: ['good', 'great', 'excellent', 'happy', 'wonderful', 'awesome', 'amazing', 'feeling better'],
    responses: [
      "That's wonderful to hear! Keep nurturing what makes you feel good.",
      "I'm so glad you're feeling positive! This is great momentum. Keep building on these good feelings.",
      "That's awesome! Remember to celebrate these moments and share your positivity with others."
    ]
  },
  exercise: {
    patterns: ['exercise', 'fitness', 'workout', 'gym', 'sport', 'running', 'walking'],
    responses: [
      "Exercise is a great way to improve mental health. Even a short 20-minute walk can boost your mood!",
      "Physical activity releases endorphins which improve your mood. What type of exercise do you enjoy?",
      "Movement is medicine for the mind and body. How are you incorporating physical activity into your routine?"
    ]
  },
  help: {
    patterns: ['help', 'support', 'advice', 'what should i do', 'i don\'t know', 'confused'],
    responses: [
      "I'm here to support you. Can you tell me more about what you need help with?",
      "Let's work through this together. What's the main thing you're struggling with right now?",
      "It's okay to need help. I'm listening and ready to support you. What's on your mind?"
    ]
  },
  emergency: {
    patterns: ['hurt myself', 'suicide', 'self harm', 'emergency', 'crisis', 'danger'],
    responses: [
      "I'm concerned about your safety. Please reach out to emergency services or a crisis helpline immediately:\n🚨 National Suicide Prevention Lifeline: 988\n🚨 Crisis Text Line: Text HOME to 741741",
      "Your safety is the priority. If you're having thoughts of harming yourself, please contact:\n📞 Emergency Services: 911\n📞 988 Suicide & Crisis Lifeline",
      "I care about your wellbeing. Please reach out to professionals who can help immediately. Visit the Emergency tab for crisis resources."
    ]
  }
};

function findMatchingResponse(message) {
  const lowerMessage = message.toLowerCase();

  // Check for emergency keywords first
  for (const keyword of responses.emergency.patterns) {
    if (lowerMessage.includes(keyword)) {
      return responses.emergency.responses[Math.floor(Math.random() * responses.emergency.responses.length)];
    }
  }

  // Check other categories
  for (const [category, data] of Object.entries(responses)) {
    if (category === 'emergency') continue;
    
    for (const pattern of data.patterns) {
      if (lowerMessage.includes(pattern)) {
        return data.responses[Math.floor(Math.random() * data.responses.length)];
      }
    }
  }

  // Default responses
  const defaultResponses = [
    "Thank you for sharing that with me. Can you tell me more about it?",
    "I understand. What would help you feel better right now?",
    "That's interesting. How has this been affecting you?",
    "I'm listening. What's most important for you to talk about?",
    "Tell me more. I'm here to support you on this journey.",
    "Your thoughts and feelings matter. Would you like to explore this further?"
  ];

  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// AI-powered response using Ollama (Local AI running on your machine)
async function getAIResponse(message) {
  try {
    const response = await axios.post(`${OLLAMA_URL}/api/generate`, {
      model: MODEL,
      prompt: `${systemPrompt}\n\nUser: ${message}\n\nMindCare:`,
      stream: false,
      options: {
        temperature: 0.7,
        num_predict: 250
      }
    });
    
    return response.data.response.trim();
  } catch (error) {
    console.error('Ollama Error:', error.message);
    // Fallback to pattern matching if Ollama fails
    return findMatchingResponse(message);
  }
}

// Export both functions - use getAIResponse for actual AI
module.exports = {
  getResponse: getAIResponse,
  getResponseFallback: findMatchingResponse
};