// App.js
import React, { useState } from 'react';
import ChatComponent from './ChatComponent';
import './styles.css';
import DarkModeToggle from './DarkModeToggle';
import UserProfile from './UserProfile';
import ErrorHandling from './ErrorHandling';
import Accessibility from './Accessibility';
import Feedback from './Feedback';
import Login from './Login';
import Register from './Register'; // Import the Register component

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (username, password) => {
    // Simple placeholder logic for demonstration
    if (username === 'user' && password === 'password') {
      setLoggedInUser(username);
    } else {
      setError('Invalid username or password.');
    }
  };

  const handleRegister = (username, password) => {
    // Placeholder logic for demonstration
    console.log('User registered:', { username, password });
    setLoggedInUser(username); // Auto-login for demonstration purposes
  };

  const handleDarkModeToggle = (isDarkMode) => {
    setDarkMode(isDarkMode);
  };

  const handleError = (errorMessage) => {
    setError(errorMessage);
  };

  const handleFeedbackSubmit = (feedback) => {
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      {loggedInUser ? (
        <div>
          <UserProfile username={loggedInUser} />
          <ChatComponent onError={handleError} />
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} onError={handleError} />
          <Register onRegister={handleRegister} onError={handleError} />
        </div>
      )}
      {error && <ErrorHandling errorMessage={error} />}
      <DarkModeToggle onToggle={handleDarkModeToggle} />
      <Accessibility />
      <Feedback onSubmitFeedback={handleFeedbackSubmit} />
    </div>
  );
};

export default App;
