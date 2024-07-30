Shared Dependencies:

1. **Exported Variables:**
   - `klu` (instance of Klu client)
   - `createSession` (function to create a new session)
   - `promptWithSession` (function to send a message within a session)
   - `promptAction` (function to send a message without a session)

2. **Data Schemas:**
   - Session object schema (returned by `createSession`)
   - Message result schema (returned by `promptWithSession` and `promptAction`)

3. **ID Names of DOM Elements:**
   - `resetButton` (ID for the reset button in the UI)
   - `messageList` (ID for the container where messages will be displayed)
   - `inputField` (ID for the input field where the user types their message)
   - `submitButton` (ID for the button to submit a new message)

4. **Message Names:**
   - No specific message names provided, but typically would include:
     - `sessionCreated` (event/message when a session is created)
     - `messageSent` (event/message when a message is sent)
     - `sessionReset` (event/message when a session is reset)

5. **Function Names:**
   - `createSession` (function to create a new session)
   - `promptWithSession` (function to send a message within a session)
   - `promptAction` (function to send a message without a session)
   - `resetSession` (function to reset the session, not explicitly provided but implied by the reset button requirement)

6. **Environment Variables:**
   - `API_KEY` (environment variable for Klu.ai API key)
   - `ACTION_ID` (environment variable for the action ID, "6942f034-6872-4eed-9bb3-7e3bf18e5743")
   - `EXT_USER_ID` (environment variable for the external user ID, "elon@musk.net")
   - `SESSION_ID` (environment variable for the session ID, "3b7c1d28-8f21-4b6a-a9d2-1a7b9c2d6a57" if needed)

7. **Shared Styles:**
   - `globals.css` (global styles that might be used across components)
   - `chatbot.module.css` (CSS module for styling chatbot-specific components)

8. **Shared Components:**
   - `Chatbot` (main chatbot component)
   - `Message` (component to display individual messages)
   - `SessionButton` (component for the reset button)

9. **Shared Utilities:**
   - `kluClient.js` (utility file to initialize and export the Klu client instance)

10. **Configuration Files:**
    - `next.config.js` (Next.js configuration file)
    - `.env.local` (local environment variables file)

11. **Package Dependencies:**
    - `@kluai/core` (Klu.ai SDK)
    - `next` (Next.js framework)
    - `react` (React library)
    - `react-dom` (React DOM bindings)

12. **Miscellaneous:**
    - `favicon.ico` (favicon for the website)
    - `package.json` (project metadata and dependency management file)