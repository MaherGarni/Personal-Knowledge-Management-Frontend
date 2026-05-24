import React from 'react';
import "./styles.css"

const Spinner = ({ size = 'medium', color = 'dark' }) => {
    return (
        <div className="spinner-wrapper" role="status" aria-label="Loading">
            <div className={`pro-spinner ${size} ${color}`}></div>
        </div>
    );
};

export default Spinner;
