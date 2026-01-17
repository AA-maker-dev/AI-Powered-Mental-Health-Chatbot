# MindCare - AI-Powered Mental Health Chatbot 🧠

A modern, full-stack web application designed to provide mental health support through an intelligent chatbot, mood tracking, resources, and emergency contacts.

## Features ✨

### 1. **AI-Powered Chatbot** 💬
- Natural language processing for understanding user queries
- Empathetic, supportive responses based on user's emotional state
- Intelligent pattern matching for mental health topics
- Context-aware conversations

### 2. **Mood Tracking** 😊
- Daily mood logging with emoji-based interface
- Mood history visualization
- Personalized mood statistics
- Insights into emotional patterns

### 3. **Mental Health Resources** 📚
- Curated articles on anxiety, depression, sleep, and wellness
- Evidence-based tips and guides
- Categorized resources for easy navigation
- Links to professional resources

### 4. **Emergency Support** 🚨
- Quick access to crisis hotlines and helplines worldwide
- Emergency contact information for multiple countries
- Crisis intervention resources
- Safety guidelines

### 5. **Beautiful, Responsive UI** 🎨
- Modern gradient design
- Smooth animations and transitions
- Fully responsive for desktop, tablet, and mobile
- Intuitive navigation

## Tech Stack 🛠️

### Frontend
- **React** - Modern UI library
- **CSS3** - Beautiful styling with gradients and animations
- **Local Storage** - For persisting mood history

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

## Installation & Setup 🚀

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (already included):
```bash
PORT=5000
NODE_ENV=development
```

4. Start the backend server:
```bash
npm start
```

Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React application:
```bash
npm start
```

Application will open at `http://localhost:3000`

## Usage 📖

1. **Chat with the Chatbot**: Type your thoughts and feelings in the chat interface. The AI will provide supportive responses.

2. **Track Your Mood**: Click on the "Mood Tracker" tab to log your daily mood and view your mood history.

3. **Explore Resources**: Visit the "Resources" tab to find articles, tips, and guides for mental health support.

4. **Access Emergency Help**: The "Emergency" tab provides immediate access to crisis hotlines and support services worldwide.

## API Endpoints 🔌

### Chat API
- `POST /api/chat` - Send a message to the chatbot
  - Request: `{ "message": "Your message here" }`
  - Response: `{ "message": "...", "reply": "...", "timestamp": "..." }`

### Mood API
- `GET /api/mood/tips/:mood` - Get tips for a specific mood
- `POST /api/mood/log` - Log a mood entry

### Resources API
- `GET /api/resources` - Get all resources
- `GET /api/resources/category/:category` - Get resources by category
- `GET /api/resources/:id` - Get a specific resource

## Project Structure 📁

```
mental-health-chatbot/
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Sidebar.js
│   │   │   ├── ChatWindow.js
│   │   │   ├── tabs/
│   │   │   │   ├── ChatTab.js
│   │   │   │   ├── MoodTab.js
│   │   │   │   ├── ResourcesTab.js
│   │   │   │   └── EmergencyTab.js
│   │   │   └── styles/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── README.md
├── backend/
│   ├── routes/
│   │   ├── chat.js
│   │   ├── mood.js
│   │   └── resources.js
│   ├── utils/
│   │   └── chatbot.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── README.md
└── README.md
```

## Features Breakdown 🎯

### Mood Tracking System
- 5 mood levels: Sad, Anxious, Neutral, Good, Great
- Visual representation with emojis
- Historical data storage
- Mood-based recommendations

### Chatbot Intelligence
- Recognizes mental health keywords
- Provides context-aware responses
- Categorized response patterns for:
  - Greetings
  - Mood expressions
  - Anxiety and stress
  - Sleep issues
  - Relationships
  - Emergency situations

### Emergency Response System
- Crisis hotlines for 4 major regions (USA, UK, Canada, Australia)
- 24/7 availability information
- Safety guidelines
- Immediate access to professional help

## Security & Privacy 🔒

- No personal data stored on servers
- Mood history stored locally in browser
- CORS protection
- No third-party integrations for personal data

## Future Enhancements 🚀

- Integration with professional NLP services (Azure Language Understanding, Google Dialogflow)
- User authentication and accounts
- Database integration (MongoDB, PostgreSQL)
- Push notifications for daily check-ins
- AI-powered therapy recommendations
- Peer support community
- Multilingual support
- Integration with wearable devices for mood correlation

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## License 📄

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer ⚠️

**Important**: This chatbot is designed for support and informational purposes only. It is not a substitute for professional mental health treatment. If you are experiencing a mental health crisis, please:

- Contact your local emergency services
- Call a suicide prevention hotline
- Reach out to a mental health professional

Crisis Resources:
- 🇺🇸 National Suicide Prevention Lifeline: 988
- 🇬🇧 Samaritans: 116 123
- 🇨🇦 Canada Suicide Prevention Service: 1-833-456-4566
- 🇦🇺 Lifeline: 13 11 14

## Support & Feedback 💬

Have questions or feedback? Feel free to reach out! Your support and suggestions help us improve MindCare.

---

**Made with ❤️ for mental health support and awareness**