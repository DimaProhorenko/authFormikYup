import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { ACCOUNT } from '../routes';

function SigninMethods() {
	const { loginWithGoogle } = UserAuth();
	const navigate = useNavigate();

	return (
		<div className="">
			<h4 className="mb-5 text-center relative before:content-[''] before:inline-block before:w-[40%] before:h-px before:bg-gray-400 before:mr-3 before:align-middle after:content-[''] after:inline-block after:w-[40%] after:h-px after:bg-gray-400 after:ml-3 after:align-middle">
				Or
			</h4>
			<button
				onClick={async () => {
					await loginWithGoogle();
					navigate(ACCOUNT);
				}}
				className="w-full border border-purple-600 text-purple-600 rounded-md shadow-md px-4 py-2 hover:text-white hover:bg-purple-600"
			>
				Sign in with Google
			</button>
		</div>
	);
}
export default SigninMethods;
