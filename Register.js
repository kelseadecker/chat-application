// Register.js
import React, { useState } from 'react';

const Register = ({ onRegister, onError }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Placeholder logic for demonstration
    if (username.trim() !== '' && password.trim() !== '') {
      onRegister(username, password);
    } else {
      onError('Please enter a valid username and password.');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
