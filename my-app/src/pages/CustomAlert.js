import React from 'react';
import './CustomAlert.css';
import { Button } from 'react-bootstrap';

const CustomAlert = ({ message, onClose, fadeClass, color }) => {
    const divStyle = {
        backgroundColor: color // Set the background color using the 'color' prop
    };

    return (
        <div className={`custom-alert ${fadeClass}`} style={divStyle}>
            <p>{message}</p>
            <Button className=' border border-4 border-black rounded-3' onClick={onClose}>Close</Button>
        </div>
    );
};

export default CustomAlert;