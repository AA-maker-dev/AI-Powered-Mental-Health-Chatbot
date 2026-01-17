import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    setMessages([...messages, { text: input, sender: 'user' }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: 'Bot response to: ' + input, sender: 'bot' }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="App">
      <h1>Mental Health Chatbot</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;