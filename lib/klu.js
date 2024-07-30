import Klu from '@kluai/core'

const klu = new Klu(process.env.API_KEY);

export async function createSession(){
  const session = await klu.sessions.create({
    action: process.env.GUID,
    extUserId: "elon@musk.net",
    name: "A conversation about X.com with Elon Musk"
  });
  return session;
}

export async function promptWithSession (sessionId) {
  const result = await klu.actions.prompt(
    process.env.GUID,
    {
      topic: "Machine Learning.",
      task: "Correct any grammar or spelling mistakes."
    },
    {
      session: sessionId
    }
  );
  return result;
}

export async function promptAction(){
  const result = await klu.actions.prompt(process.env.GUID, "Write a sentence about Machine Learning.");
  return result;
}