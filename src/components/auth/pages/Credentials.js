import React, { useContext, useState } from "react";
// import { AuthPageType } from "../models/Auth.model";
import AuthContext from "../context/Auth.context";

export default function Credentials({ pageType }) {
	const [formData, setFormData] = useState({
		name: "",
		password: "",
		email: "",
	});

	const { submitUserData } = useContext(AuthContext);

	const handleSubmit = (event) => {
		event.preventDefault();

		submitUserData(formData, pageType);

		setTimeout(() => {
			setFormData({ name: "", password: "", email: "" });
		}, 50);
	};

	const handleChange = (event) => {
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	return (
		<div>
			<label>
				Name:{" "}
				<input
					onChange={handleChange}
					type="text"
					name="name"
					value={formData.name}
				/>
			</label>
			<label>
				E-Mail:{" "}
				<input
					onChange={handleChange}
					type="text"
					name="email"
					value={formData.email}
				/>
			</label>
			<label>
				Password:{" "}
				<input
					onChange={handleChange}
					type="password"
					name="password"
					value={formData.password}
				/>
			</label>
			<button onClick={handleSubmit}>{pageType}</button>
		</div>
	);
}
