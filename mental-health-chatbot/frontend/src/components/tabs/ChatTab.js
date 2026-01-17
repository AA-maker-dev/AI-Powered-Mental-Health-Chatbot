import React, { useState, useEffect, useRef } from 'react';
import '../styles/ChatTab.css';

function ChatTab({ userMood }) {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm MindCare, your personal mental health companion. How are you feeling today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();
      
      const botMessage = {
        id: messages.length + 2,
        text: data.reply,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="chat-tab">
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            <div className="message-bubble">
              <p>{msg.text}</p>
              <span className="timestamp">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="message bot">
            <div className="message-bubble typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="input-area">
        <div className="input-wrapper">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message here... (Shift+Enter for new line)"
            className="message-input"
            rows="1"
          />
          <button 
            onClick={handleSend} 
            disabled={loading || !input.trim()}
            className="send-btn"
          >
            <span>Send</span>
            <span className="send-icon">➤</span>
          </button>
        </div>
        <p className="input-hint">Feel free to share your thoughts and feelings. I'm here to listen.</p>
      </div>
    </div>
  );
}

export default ChatTab;