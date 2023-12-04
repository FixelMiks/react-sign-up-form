import React from 'react';

const RegisterInput = ({ name, type, placeholder, onChange, value, error}) => {
    return (
        <div>
            <label htmlFor={name}>{name}: </label>
            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <span>{error}</span>}
        </div>
    );
};

export default RegisterInput;
