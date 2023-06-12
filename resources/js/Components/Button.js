import React from 'react';
import PropTypes from 'prop-types';

Button.propTypes = {
    type : PropTypes.oneOf(['submit', 'button']),
    variant : PropTypes.oneOf(["primary", "warning", "danger", "light-outline", "white-outline"]),
    processing : PropTypes.bool,
    className : PropTypes.string,
    children : PropTypes.node,
}

export default function Button({ 
    type = 'submit', 
    variant = "primary",
    className = '', 
    onClick, 
    processing, 
    children }) {
    return (
        <button
            type={type}
            className={`rounded-2xl py-[13px] text-center w-full btn-${variant} ${processing && 'opacity-25'} ${className}`}
            disabled={processing}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
