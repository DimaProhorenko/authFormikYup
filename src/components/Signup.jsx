import { Formik, Form } from 'formik';
import { object } from 'yup';
import { Link } from 'react-router-dom';

import { Container, Input, Button, Title } from './';
import {
	emailValidation,
	passwordValidation,
} from '../validation/inputValidation';
import { SIGNIN } from '../routes';

function Signup() {
	return (
		<Container>
			<Title>Create your account</Title>
			<p className="mb-4">
				Already have an account{' '}
				<Link
					className="font-semibold underline hover:text-purple-600"
					to={SIGNIN}
				>
					Signin
				</Link>
			</p>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={object({
					...emailValidation,
					...passwordValidation,
				})}
				onSubmit={(value) => {
					console.log(value);
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
		</Container>
	);
}
export default Signup;
