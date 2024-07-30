import React, { useState, useEffect } from 'react';
import { promptWithSession, promptAction } from '../lib/klu';

const Chat = () => {
  const [session, setSession] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (session) {
      promptWithSession(session)
        .then(result => {
          setMessages([...messages, result]);
        });
    } else {
      promptAction()
        .then(result => {
          setMessages([...messages, result]);
        });
    }
  }, [session]);

  return (
    <div>
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
    </div>
  );
};

export default Chat;