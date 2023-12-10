import React from 'react';
import { useState, useEffect, useRef } from 'react';
import RegisterInput from '../RegisterInput/RegisterInput';
import { validate } from '../../utils/validate';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
    const [value, setValue] = useState({email: '', password: '', confirmPassword: ''});
    const [error, setError] = useState({});
    const isValid = Object.keys(error).length === 0;
    const submitButtonRef = useRef(null);

    const handleChange = (event) => {
        const { target } = event;
        setValue((prevState) => ({...prevState, [target.name]: target.value}));     
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(value);
    }

    useEffect(() => {
        validate
            .validate(value, {abortEarly: false})
            .then(() => {
                setError({});
            })
            .catch((errors) => {
                const parseError = (errObj) => {
                    const {inner} = errObj;
                    return inner.reduce((acc, err) => {
                        const {path, message} = err;
                        return {
                            ...acc,
                            [path]: message
                        }
                    }, {})
                }

                const newError = parseError(errors)
                setError(newError)        
            });
    }, [value]);

    useEffect(() => {
        if (Object.keys(error).length === 0) {
            submitButtonRef.current.focus();
        };
    }, [error]);

	return (
		<div className={style.Wrapper}>
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
                <button className={style.Button} type='submit' ref={submitButtonRef} disabled={!isValid}>Sign Up</button>
			</form>
		</div>
	);
};

export default RegisterForm;
