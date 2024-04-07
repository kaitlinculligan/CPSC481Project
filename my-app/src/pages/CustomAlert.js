import React from 'react';
import './CustomAlert.css'; // Assuming you have a CSS file for styling

const CustomAlert = ({ message, onClose }) => {
  return (
    <div className="custom-alert">
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CustomAlert;