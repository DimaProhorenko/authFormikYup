import { Container, Input, Button, Title } from './';
import { Formik, Form } from 'formik';
import { object } from 'yup';
import {
	emailValidation,
	passwordValidation,
} from '../validation/inputValidation';

function Signup() {
	return (
		<Container>
			<Title>Create your account</Title>
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
					<Form className="">
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
