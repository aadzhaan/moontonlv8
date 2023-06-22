import React from 'react';

export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="rounded border-gray-300 text-alerange-600 shadow-sm focus:border-alerange-300 focus:ring focus:ring-alerange-200 focus:ring-opacity-50"
            onChange={(e) => handleChange(e)}
        />
    );
}
