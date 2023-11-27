/* eslint-disable no-useless-escape */
import { string } from 'yup';

export const emailValidation = {
	email: string()
		.email('Invalid email address')
		.required('Please Enter your Email'),
};

export const passwordValidation = {
	password: string()
		.required('Please Enter your Password')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
			'Must be 8-16 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
		),
};
