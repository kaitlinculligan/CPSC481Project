import React from 'react';
import './CustomAlert.css';

const CustomAlert = ({ message, onClose, fadeClass, color }) => {
    const divStyle = {
        backgroundColor: color // Set the background color using the 'color' prop
    };

    return (
        <div className={`custom-alert ${fadeClass}`} style={divStyle}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default CustomAlert;