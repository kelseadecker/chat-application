
import React, { useState } from 'react';

const DarkModeToggle = ({ onToggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    onToggle(!isDarkMode);
  };

  return (
    <div>
      <label>
        Dark Mode
        <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      </label>
    </div>
  );
};

export default DarkModeToggle;
