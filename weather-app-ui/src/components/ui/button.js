// Button.js
import React from 'react';

export const Button = ({ onClick, children, className }) => {
    return (
        <button
            onClick={onClick}
            className={`p-2 bg-indigo-500 hover:bg-indigo-600 transition-all rounded-md ${className}`}
        >
            {children}
        </button>
    );
};
