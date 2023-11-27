import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signup } from './components';
import { HOME, ACCOUNT, SIGNIN, SIGNUP } from './routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME} element={<Signup />} />
				<Route path={SIGNUP} element={<Signup />} />
				<Route path={SIGNIN} element={<h1>Signin</h1>} />
				<Route path={ACCOUNT} element={<h1>Account</h1>} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
