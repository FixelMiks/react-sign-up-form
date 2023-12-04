import { isRequired, isEmail, isLength, isMatch } from './validateRules';

export const validate = (values, config) => {
	const error = {};

	for (const key in config) {
		const validateRules = config[key];

		for (const rule in validateRules) {
			const { message } = validateRules[rule];
			const isError = !validator(rule, values[key], values);

			if (isError) {
				error[key] = message;
			}
		}
	}

	return error;
};

const validator = (ruleName, value, values) => {
	switch (ruleName) {
		case 'isRequired':
			return isRequired(value);
		case 'isEmail':
			return isEmail(value);
		case 'isLength':
			return isLength(value);
		case 'isMatch':
			return isMatch(values);
		default:
			break;
	}
};
