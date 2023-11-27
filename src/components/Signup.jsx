import { Formik, Form } from 'formik';
import { object } from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { Container, Input, Button, Title, SigninMethods } from './';
import {
	emailValidation,
	passwordValidation,
} from '../validation/inputValidation';
import { ACCOUNT, SIGNIN } from '../routes';
import { UserAuth } from '../context/AuthContext';

function Signup() {
	const { createUserEmailPassword } = UserAuth();
	const navigate = useNavigate();

	return (
		<Container>
			<Title>Create your account</Title>
			<p className="mb-4">
				Already have an account{' '}
				<Link
					className="font-semibold underline hover:text-purple-600"
					to={SIGNIN}
				>
					Sign in
				</Link>
			</p>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={object({
					...emailValidation,
					...passwordValidation,
				})}
				onSubmit={async ({ email, password }) => {
					await createUserEmailPassword(email, password);
					navigate(ACCOUNT);
				}}
			>
				{({ isValid, dirty }) => (
					<Form>
						<Input
							label="Email"
							id="email"
							name="email"
							placeholder="Email"
						/>
						<Input
							label="Password"
							id="password"
							name="password"
							placeholder="Password"
						/>
						<Button
							type="submit"
							className="ml-auto block"
							disabled={!(isValid && dirty)}
						>
							Sign up {isValid}
						</Button>
					</Form>
				)}
			</Formik>
			<SigninMethods />
		</Container>
	);
}
export default Signup;
