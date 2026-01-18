# Setting Up Real AI for Your Mental Health Chatbot

Your chatbot is now powered by **OpenAI's GPT-4o Mini** - a real AI model!

## Quick Setup

### 1. Get an OpenAI API Key
- Go to [platform.openai.com](https://platform.openai.com)
- Sign up or log in
- Navigate to **API keys** section
- Click **Create new secret key**
- Copy your key (save it somewhere safe)

### 2. Add Your API Key
Create a `.env` file in the `backend` folder:

```
OPENAI_API_KEY=sk-your-key-here
PORT=5000
```

Replace `sk-your-key-here` with your actual OpenAI API key.

### 3. Install Dependencies
```bash
cd backend
npm install
```

### 4. Start the Server
```bash
npm start
# or for development: npm run dev
```

## What Changed?

✅ **Before:** Chatbot used simple pattern matching (random hardcoded responses)  
✅ **After:** Real AI that understands context and generates personalized responses

## How It Works

1. User sends a message to the chatbot
2. Message is sent to OpenAI's GPT-4o Mini model
3. Model processes the message with mental health context
4. AI generates an empathetic, personalized response
5. Response is sent back to the user

## Features

- **Contextual Understanding** - AI understands nuance, not just keywords
- **Personalized Responses** - Each response is unique and tailored
- **Safe Fallback** - If API fails, pattern matching kicks in
- **Cost Effective** - GPT-4o Mini is cheap for a hackathon project
- **Fast Response** - Typically <2 seconds per response

## Pricing

- GPT-4o Mini: ~$0.15 per 1M input tokens
- OpenAI free trial: $5 credit (usually enough for testing)
- Typical chatbot interaction: 50-100 tokens (~$0.001-0.002 per message)

## Troubleshooting

**"Error: OPENAI_API_KEY is missing"**
- Make sure you created `.env` file with your API key
- Make sure you copied the key correctly
- Restart the server after adding the key

**"API Rate Limited"**
- You've hit OpenAI rate limits (very unlikely for hackathon)
- Wait a minute and try again

**Slow Responses**
- Might be a network issue
- Check your internet connection
- OpenAI API typically responds in <1 second

## Next Steps

- Test with real conversation
- Monitor the server logs to see AI responses
- Adjust the system prompt in `chatbot.js` if needed
- Consider adding conversation history for better context
