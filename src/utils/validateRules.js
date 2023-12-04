export const isRequired = (value) => {
	return Boolean(value);
};

export const isEmail = (value) => {
	return Boolean(value.match(/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/i));
};

export const isLength = (value) => {
	return Boolean(value.match(/[0-9a-zA-Z!@#$%^&*]{6,}/));
};

export const isMatch = (values) => {
	if (values.password === values.confirmPassword) {
		return true;
	}
};
