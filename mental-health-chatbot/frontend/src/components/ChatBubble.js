import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ text, sender }) => {
  return (
    <div className={`chat-bubble ${sender}`}>  
      {text}
    </div>
  );
};

export default ChatBubble;