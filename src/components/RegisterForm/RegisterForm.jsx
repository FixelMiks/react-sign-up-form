import React from 'react';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validateSchema } from '../../utils/validateSchema';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        resolver: yupResolver(validateSchema),
    });
    const emailError = errors.email?.message;
    const passwordError = errors.password?.message;
    const confirmPasswordError = errors.confirmPassword?.message;

    const onSubmit = (formData) => {
        console.log(formData);
    }

    const submitButtonRef = useRef(null);

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
            submitButtonRef.current.focus();
        };
    }, [errors]);
    
    const isValid = Object.keys(errors).length === 0;

	return (
		<div className={style.Wrapper}>
			<h1 className={style.Title}>Sign Up</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.Input__wrapper}>
                    <label className={style.Label} htmlFor='email'>Email: </label>
                    <input
                        className={style.Input}
                        id='email'
                        name='email'
                        type='email'
                        placeholder='email'
                        {...register('email')}
                    />
                    {emailError && <span className={style.Error}>{emailError}</span>}
                </div>
                <div className={style.Input__wrapper}>
                    <label className={style.Label} htmlFor='password'>Password: </label>
                    <input
                        className={style.Input}
                        id='password'
                        name='password'
                        type='password'
                        placeholder='password'
                        {...register('password')}
                    />
                    {passwordError && <span className={style.Error}>{passwordError}</span>}
                </div>
                <div className={style.Input__wrapper}>
                    <label className={style.Label} htmlFor='email'>Confirm password: </label>
                    <input
                        className={style.Input}
                        id='confirmPassword'
                        name='confirmPassword'
                        type='password'
                        placeholder='confirmPassword'
                        {...register('confirmPassword')}
                    />
                    {confirmPasswordError && <span className={style.Error}>{confirmPasswordError}</span>}
                </div>
                <button className={style.Button} type='submit' disabled={!isValid} ref={submitButtonRef}>Sign Up</button>
			</form>
		</div>
	);
};

export default RegisterForm;
