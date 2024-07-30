import '../styles/globals.css'
import { KluProvider } from '@kluai/core'
import { useEffect, useState } from 'react'
import Chatbot from '../components/Chatbot'

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    createSession();
  }, []);

  async function createSession() {
    const klu = new Klu(process.env.API_KEY);
    try {
      const newSession = await klu.sessions.create({
        action: process.env.ACTION_ID,
        extUserId: process.env.EXT_USER_ID,
        name: "A conversation about X.com with Elon Musk"
      });
      setSession(newSession);
    } catch (error) {
      console.error("Failed to create session:", error);
    }
  }

  function resetSession() {
    createSession();
  }

  return (
    <KluProvider apiKey={process.env.API_KEY}>
      <Chatbot session={session} resetSession={resetSession} />
      <Component {...pageProps} />
    </KluProvider>
  )
}

export default MyApp
