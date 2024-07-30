import React from 'react';
import { createSession } from '../lib/klu';

const ResetButton = () => {
  const handleReset = async () => {
    await createSession();
  };

  return (
    <button onClick={handleReset}>
      Reset Session
    </button>
  );
};

export default ResetButton;