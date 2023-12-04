import React from 'react';
import { useState, useEffect, useRef } from 'react';
import RegisterInput from '../RegisterInput/RegisterInput';
import { validate } from '../../utils/validate';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
    const [value, setValue] = useState({email: '', password: '', confirmPassword: ''});
    const [error, setError] = useState({});

    const submitButtonRef = useRef(null);

    const handleChange = (event) => {
        const { target } = event;
        setValue((prevState) => ({...prevState, [target.name]: target.value}));

        if (Object.keys(error).length === 0) {
            submitButtonRef.current.focus();
        };
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    }

    const isValid = Object.keys(error).length === 0;

    const validateSchema = {
        email: {
            isEmail: {
                message: 'Email is invalid',
            },
            isRequired: {
                message: 'Email is required',
            },
        },
        password: {
            isLength: {
                message: 'Password must be at least 6 characters long'
            },
            isRequired: {
                message: 'Password is required'
            }
        },
        confirmPassword: {
            isMatch: {
                message: 'Password mismatch'
            },
            isRequired: {
                message: 'Confirm password is required'
            }
        }
    };

    useEffect(() => {
        const error = validate(value, validateSchema);
        setError(error);
    }, [value]);

	return (
		<div className={style.RegisterForm}>
			<h1 className={style.Title}>Sign Up</h1>
			<form onSubmit={handleSubmit}>
				<RegisterInput
                    name='email'
                    type='email'
                    placeholder='email'
                    value={value.name}
                    onChange={handleChange}
                    error={error.email}
                />
				<RegisterInput
                    name='password'
                    type='password'
                    placeholder='password'
                    value={value.name}
                    onChange={handleChange}
                    error={error.password}
                />
				<RegisterInput
                    name='confirmPassword'
                    type='password'
                    placeholder='confirm password'
                    value={value.name}
                    onChange={handleChange}
                    error={error.confirmPassword}
                />
                <button type='submit' ref={submitButtonRef} disabled={!isValid}>Sign Up</button>
			</form>
		</div>
	);
};

export default RegisterForm;
