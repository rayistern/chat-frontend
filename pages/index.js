import { useState, useEffect } from 'react';
import Chatbot from '../components/Chatbot';
import SessionButton from '../components/SessionButton';
import { createSession } from '../utils/kluClient';
import styles from '../styles/chatbot.module.css';

export default function Home() {
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // On page load, create a new session
    const initializeSession = async () => {
      const session = await createSession();
      if (session && session.id) {
        setSessionId(session.id);
      }
    };

    initializeSession();
  }, []);

  const handleResetSession = async () => {
    // Reset the session when the reset button is pressed
    const session = await createSession();
    if (session && session.id) {
      setSessionId(session.id);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>AI Chatbot</h1>
      <Chatbot sessionId={sessionId} />
      <SessionButton onResetSession={handleResetSession} />
    </div>
  );
}