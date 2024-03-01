import React, { useContext } from "react";
import TaskContext from "../tasks/context/TaskContext.context";

export default function Homepage() {
	const { message } = useContext(TaskContext);

	console.log({ messageInHomePage: message });
	return (
		<div>
			<header className="App-header">Homepage</header>
			<br />
			<br />
		</div>
	);
}
