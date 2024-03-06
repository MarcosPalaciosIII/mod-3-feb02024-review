import "./App.css";
import React from "react";
import TasksHome from "./components/tasks/TasksHome";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/core/Homepage";
import Navbar from "./components/core/Navbar";

function App() {
	return (
		<div className="App">
			{/* in your return, you must have only 1 parent html element. You may have as many children as you like */}
			<Navbar />

			<Routes>
				<Route exact path="/" element={<Homepage />} />
				<Route exact path="/tasks/*" element={<TasksHome />} />
			</Routes>

			<footer>
				<h3> This is the awesome footer! </h3>
			</footer>
		</div>
	);
}

export default App;
