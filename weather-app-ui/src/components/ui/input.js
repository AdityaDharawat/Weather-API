// Input.js
import React from 'react';

export const Input = ({ type, placeholder, value, onChange, className }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`p-2 bg-white text-gray-800 rounded-md border border-gray-300 ${className}`}
        />
    );
};
