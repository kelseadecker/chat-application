// Accessibility.js
import React from 'react';

const Accessibility = () => {
  return (
    <div className="accessibility-container">
      <h2>Accessibility Settings</h2>
      <label>
        <input type="checkbox" aria-label="Enable High Contrast" />
        Enable High Contrast
      </label>
      <br />
      <label>
        <input type="checkbox" aria-label="Increase Font Size" />
        Increase Font Size
      </label>
      <br />
      {/* Add more accessibility settings as needed */}
    </div>
  );
};

export default Accessibility;
