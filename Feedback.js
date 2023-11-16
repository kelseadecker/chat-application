// Feedback.js
import React, { useState } from 'react';

const Feedback = ({ onSubmitFeedback }) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    // You can customize the feedback submission logic here
    // For simplicity, we're passing the feedback to a callback function
    onSubmitFeedback(feedback);
    setFeedback(''); // Clear the input after submission
  };

  return (
    <div className="feedback-container">
      <h2>Provide Feedback</h2>
      <textarea
        placeholder="Share your thoughts..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      ></textarea>
      <br />
      <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
    </div>
  );
};

export default Feedback;
