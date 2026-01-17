# MindCare - Quick Start Guide

## Your AI-Powered Mental Health Chatbot is Ready! 🎉

Thank you for choosing MindCare. This guide will help you get started in just a few minutes.

### What You Get ✨
- ✅ Full-stack mental health chatbot application
- ✅ Beautiful, modern UI with stunning gradients
- ✅ Mood tracking with history
- ✅ Mental health resources library
- ✅ Emergency helpline access worldwide
- ✅ Intelligent AI responses
- ✅ Fully installed and ready to run

### Prerequisites ✓
- Node.js v14+ installed
- npm installed
- 2 Terminal windows/tabs

---

## Step 1: Start the Backend Server

### On Windows:
```powershell
cd backend
npm start
```

### On Mac/Linux:
```bash
cd backend
npm start
```

**You should see:**
```
🧠 MindCare API running on http://localhost:5000
```

✅ Backend is ready!

---

## Step 2: Start the Frontend Application

### On Windows (open a NEW terminal):
```powershell
cd frontend
npm start
```

### On Mac/Linux (open a NEW terminal):
```bash
cd frontend
npm start
```

**The app will automatically open at:**
```
http://localhost:3000
```

✅ Application is running!

---

## Using MindCare 🧠

### Chat Tab 💬
- Type any message about how you're feeling
- The AI will respond empathetically
- Try topics like: anxiety, sleep, relationships, happiness

**Example messages:**
- "I'm feeling really anxious"
- "I can't sleep"
- "Tell me about stress management"
- "I'm having a great day!"

### Mood Tracker 😊
- Click on your current mood emoji
- Track your emotional patterns
- View mood history
- Get personalized recommendations

### Resources 📚
- Browse mental health articles
- Find tips for different topics
- Learn evidence-based techniques
- Explore wellness guides

### Emergency Support 🚨
- Access crisis hotlines worldwide
- Find helplines in your region
- Get immediate support resources
- Safety guidelines

---

## Testing the Chatbot 🧪

Try these conversation starters:

```
1. "Hello"
   → Friendly greeting from the bot

2. "I'm feeling sad"
   → Empathetic response with support

3. "How can I manage anxiety?"
   → Anxiety management advice

4. "I can't sleep"
   → Sleep improvement tips

5. "I'm having a great day!"
   → Positive reinforcement
```

---

## Project Features 🎯

### Modern UI Design
- Beautiful purple gradient theme
- Smooth animations
- Responsive design (works on desktop, tablet, mobile)
- Intuitive navigation

### Smart Chatbot
- Pattern matching for mental health keywords
- Context-aware responses
- Emergency keyword detection
- Supportive tone

### Mood Tracking
- 5-level mood scale
- Historical data storage (local)
- Mood statistics visualization
- Mood-based tips

### Comprehensive Resources
- 6+ curated articles
- Mental health tips
- Wellness guides
- Professional links

### Global Emergency Support
- Hotlines for USA, UK, Canada, Australia
- 24/7 availability information
- Crisis intervention guidelines
- Immediate access to help

---

## Project Structure 📁

```
mental-health-chatbot/
├── frontend/           # React application
│   ├── public/        # Static files
│   ├── src/           # React components
│   ├── package.json   # Dependencies
│   └── node_modules/  # ✅ Already installed
│
├── backend/           # Express API
│   ├── routes/        # API endpoints
│   ├── utils/         # Chatbot logic
│   ├── server.js      # Main server file
│   ├── package.json   # Dependencies
│   └── node_modules/  # ✅ Already installed
│
└── README.md          # Full documentation
```

---

## API Endpoints 🔌

If you want to explore the API directly:

### Chat
```
POST http://localhost:5000/api/chat
Body: { "message": "Your message" }
```

### Health Check
```
GET http://localhost:5000/api/health
```

### Mood Tips
```
GET http://localhost:5000/api/mood/tips/sad
```

### Resources
```
GET http://localhost:5000/api/resources
```

---

## Troubleshooting 🔧

### Port Already in Use
If port 5000 or 3000 is already in use:

Backend (.env file):
```
PORT=5001
```

Frontend (package.json - add in scripts):
```json
"start": "set PORT=3001 && react-scripts start"
```

### Module not found errors
```bash
# Clear node_modules and reinstall
cd backend
rm -rf node_modules  # or: rmdir /s node_modules (Windows)
npm install

# Repeat for frontend
cd ../frontend
rm -rf node_modules
npm install
```

### CORS Issues
Already configured! The app is set to communicate between localhost:3000 and localhost:5000.

---

## Customization Ideas 💡

### Add your own responses
Edit: `backend/utils/chatbot.js`

### Change colors/theme
Edit: CSS files in `frontend/src/components/styles/`

### Add more resources
Edit: `backend/routes/resources.js`

### Modify emergency contacts
Edit: `frontend/src/components/tabs/EmergencyTab.js`

---

## Deployment Ready 🚀

This project is ready for production deployment on:
- Vercel (Frontend)
- Heroku (Backend)
- AWS, Azure, Google Cloud
- Docker containers

See `README.md` for deployment details.

---

## Mental Health Resources 🌟

Remember: This app is a support tool, not a substitute for professional help.

If you're in crisis:
- 🇺🇸 Call 988 (Suicide & Crisis Lifeline)
- 🇬🇧 Call 116 123 (Samaritans)
- 🇦🇺 Call 13 11 14 (Lifeline)
- 🇨🇦 Call 1-833-456-4566 (Crisis Service)

---

## Next Steps 🎓

1. **Explore the Application**
   - Try all tabs and features
   - Test the chatbot with different messages

2. **Customize for Your Needs**
   - Modify responses in the chatbot
   - Update resources list
   - Change colors/branding

3. **Deploy to Production**
   - Push to GitHub
   - Deploy frontend to Vercel
   - Deploy backend to Heroku

4. **Add More Features**
   - User authentication
   - Database integration
   - Real AI/NLP services
   - Peer support community

---

## Support & Feedback 💬

Have questions or found an issue?
- Check the main README.md
- Review the code comments
- Explore the project structure

---

## Congratulations! 🎉

You now have a fully functional, beautiful mental health chatbot application!

**Happy coding and mental health awareness! 🧠❤️**

---

*Made with care for mental health support and awareness*