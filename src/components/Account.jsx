import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

import { Container, Button } from './';
import { HOME } from '../routes';

function Account() {
	const { user, logout } = UserAuth();
	const [createdAt, setCreatedAt] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		setCreatedAt(user?.metadata.createdAt);
	}, [user]);

	const date = new Date(createdAt);
	console.log(date);

	return (
		<Container>
			<p>Email: {user?.email || 'No user'}</p>
			{createdAt && (
				<p>
					<span>{createdAt}</span>Created on{' '}
					{new Date(createdAt).toLocaleDateString()}
				</p>
			)}
			<Button
				onClick={() => {
					logout();
					navigate(HOME);
				}}
			>
				Logout
			</Button>
		</Container>
	);
}
export default Account;
