import { useState, useEffect } from 'react';
import { createSession, promptWithSession, promptAction } from '../lib/klu';
import Chat from '../components/Chat';
import ResetButton from '../components/ResetButton';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [session, setSession] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initializeSession = async () => {
      const newSession = await createSession();
      setSession(newSession);
    };

    initializeSession();
  }, []);

  const resetSession = async () => {
    const newSession = await createSession();
    setSession(newSession);
    setMessages([]);
  };

  const sendMessage = async (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    const response = session
      ? await promptWithSession(session, message)
      : await promptAction(message);
    setMessages([...messages, { text: response, sender: 'bot' }]);
  };

  return (
    <div className={styles.container}>
      <ResetButton resetSession={resetSession} />
      <Chat messages={messages} sendMessage={sendMessage} />
    </div>
  );
}