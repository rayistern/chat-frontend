import React from 'react';
import { createSession } from '../utils/kluClient';

const SessionButton = () => {
  const handleResetSession = async () => {
    await createSession();
    // Assuming there's a function to update the UI after session reset
    // This function should be implemented in the parent component or context
    // updateUIAfterSessionReset();
  };

  return (
    <button id="resetButton" onClick={handleResetSession}>
      Start New Session
    </button>
  );
};

export default SessionButton;