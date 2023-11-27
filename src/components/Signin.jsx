/* eslint-disable react/no-unescaped-entities */
import { Formik, Form } from 'formik';
import { object } from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { Button, Input, Container, Title } from './';
import {
	emailValidation,
	passwordValidation,
} from '../validation/inputValidation';
import { ACCOUNT, SIGNUP } from '../routes';
import { UserAuth } from '../context/AuthContext';

function Signin() {
	const { loginEmailPassword } = UserAuth();
	const navigate = useNavigate();

	return (
		<Container>
			<Title>Sign in to your account</Title>
			<p>
				Don't have an account?{' '}
				<Link
					className="underline font-semibold hover:text-purple-600"
					to={SIGNUP}
				>
					Sign up
				</Link>
			</p>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validationSchema={object({
					...emailValidation,
					...passwordValidation,
				})}
				onSubmit={({ email, password }) => {
					loginEmailPassword(email, password);
					navigate(ACCOUNT);
				}}
			>
				{({ isValid, dirty }) => (
					<Form>
						<Input
							label="Email"
							name="email"
							id="email"
							placeholder="Email"
						/>
						<Input
							label="Password"
							name="password"
							id="password"
							placeholder="Password"
						/>
						<Button
							className="block ml-auto"
							disabled={!(isValid && dirty)}
						>
							Signin
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
}
export default Signin;
