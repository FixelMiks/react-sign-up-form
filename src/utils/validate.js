import * as yup from 'yup';

export const validate = yup.object({
	email: yup
		.string()
		.matches(
			/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/i,
			'Email is invalid',
		)
		.required('Email is required'),
	password: yup
		.string()
		.matches(/[0-9a-zA-Z!@#$%^&*]{6,}/, 'Password must be at least 6 characters long')
		.required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password')], 'Password mismatch')
		.required('Confirm password is required'),
});
