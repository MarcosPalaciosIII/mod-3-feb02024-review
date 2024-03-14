import { createContext, useEffect, useState } from "react";
import { AuthPageType } from "../models/Auth.model";
import AuthService from "../services/AuthService";

const AuthContext = createContext({});
const service = new AuthService();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("user")) || null
	);

	// const [message, setMessage] = useState({message: '', type: 'error'})

	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(user));
	}, [user]);

	const submitUserData = async (data, formType) => {
		let userResp;

		console.log({ userResp, formType, AuthPageType });

		if (formType === AuthPageType.login) {
			userResp = await service.login(data);
			const unencreyptedUserData = await service.verifyUser(
				userResp.authToken
			);

			console.log({ unencreyptedUserData });

			setUser(unencreyptedUserData);
		} else {
			userResp = await service.signup(data);
			console.log("the else condition setting user", userResp);
			setUser(userResp);
		}
	};

	return (
		<AuthContext.Provider value={{ user, setUser, submitUserData }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
