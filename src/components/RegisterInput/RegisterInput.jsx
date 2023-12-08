import React from 'react';
import style from './RegisterInput.module.css'

const RegisterInput = ({ name, type, placeholder, onChange, value, error}) => {
    return (
        <div className={style.Wrapper}>
            <label className={style.Label} htmlFor={name}>{name}: </label>
            <input
                className={style.Input}
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error && <span className={style.Error}>{error}</span>}
        </div>
    );
};

export default RegisterInput;
