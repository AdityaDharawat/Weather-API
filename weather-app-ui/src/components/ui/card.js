// Card.js
import React from 'react';

export const Card = ({ children, className }) => {
    return <div className={`border border-gray-200 p-4 rounded-lg shadow-md ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }) => {
    return <div className={`p-4 ${className}`}>{children}</div>;
};
