import React from "react";
import { Routes, Route } from "react-router-dom";
import Credentials from "./pages/Credentials";
import { AuthPageType } from "./models/Auth.model";
import { AuthProvider } from "./context/Auth.context";

export default function Registration() {
	return (
		<AuthProvider>
			<Routes>
				<Route
					path="/login"
					element={<Credentials pageType={AuthPageType.login} />}
				/>
				<Route
					path="/signup"
					element={<Credentials pageType={AuthPageType.signup} />}
				/>
			</Routes>
		</AuthProvider>
	);
}
