import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav>
			{/* <a href='/'>Home</a> */}
			<Link to="/">Home</Link>
			<Link to="/tasks">Tasks</Link>
			<Link to="/auth/login">Login</Link>
			<Link to="/auth/signup">Signup</Link>
		</nav>
	);
}
