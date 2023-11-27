import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signin, Signup, Account } from './components';
import { HOME, ACCOUNT, SIGNIN, SIGNUP } from './routes';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path={HOME} element={<Signup />} />
					<Route path={SIGNUP} element={<Signup />} />
					<Route path={SIGNIN} element={<Signin />} />
					<Route path={ACCOUNT} element={<Account />} />
				</Routes>
			</BrowserRouter>
		</AuthContextProvider>
	);
}
export default App;
