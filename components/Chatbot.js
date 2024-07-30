import React, { useState, useEffect } from 'react';
import { createSession, promptWithSession } from '../utils/kluClient';
import Message from './Message';
import SessionButton from './SessionButton';
import styles from '../styles/chatbot.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    handleCreateSession();
  }, []);

  const handleCreateSession = async () => {
    const session = await createSession();
    if (session && session.id) {
      setSessionId(session.id);
      setMessages([...messages, { text: 'Session started', isBot: true }]);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;
    setMessages([...messages, { text: input, isBot: false }]);
    const result = await promptWithSession(input, sessionId);
    if (result && result.message) {
      setMessages([...messages, { text: input, isBot: false }, { text: result.message, isBot: true }]);
    }
    setInput('');
  };

  const handleResetSession = () => {
    setMessages([]);
    handleCreateSession();
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer} id="messageList">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isBot={message.isBot} />
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          id="inputField"
          type="text"
          className={styles.inputField}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button id="submitButton" className={styles.sendButton} onClick={handleSendMessage}>
          Send
        </button>
      </div>
      <SessionButton handleResetSession={handleResetSession} />
    </div>
  );
};

export default Chatbot;