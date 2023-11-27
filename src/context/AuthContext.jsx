import { useState, useEffect, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserContext = createContext();
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const createUserEmailPassword = (email, password) => {
	return createUserWithEmailAndPassword(auth, email, password);
};

const loginEmailPassword = (email, password) => {
	return signInWithEmailAndPassword(auth, email, password);
};

const logout = () => {
	return signOut(auth);
};

const loginWithGoogle = () => {
	return signInWithPopup(auth, googleProvider);
};

export const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log(currentUser);
			setUser(currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				createUserEmailPassword,
				loginEmailPassword,
				logout,
				loginWithGoogle,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.any.isRequired,
};

export const UserAuth = () => {
	return useContext(UserContext);
};
