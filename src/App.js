import "./App.css";
import React, { useState } from "react";
import TasksHome from "./components/TasksHome";

function App() {
	return (
		<div className="App">
			{/* in your return, you must have only 1 parent html element. You may have as many children as you like */}
			<header className="App-header">React Review</header>
			<br />
			<br />
			<TasksHome />
		</div>
	);
}

export default App;
