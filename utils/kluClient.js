import Klu from '@kluai/core';

const klu = new Klu(process.env.API_KEY);

export async function createSession() {
  try {
    const session = await klu.sessions.create({
      action: process.env.ACTION_ID,
      extUserId: process.env.EXT_USER_ID,
      name: "A conversation about X.com with Elon Musk",
    });
    return session;
  } catch (error) {
    console.error('Error creating session:', error);
  }
}

export async function promptWithSession(sessionId, message) {
  try {
    const result = await klu.actions.prompt(
      process.env.ACTION_ID,
      {
        topic: message,
      },
      {
        session: sessionId,
      }
    );
    return result;
  } catch (error) {
    console.error('Error sending message with session:', error);
  }
}

export async function promptAction(message) {
  try {
    const result = await klu.actions.prompt(
      process.env.ACTION_ID,
      message
    );
    return result;
  } catch (error) {
    console.error('Error sending message without session:', error);
  }
}