import "./App.css";
import React, { useState } from "react";
import TasksHome from "./components/tasks/TasksHome";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/core/Homepage";
import Navbar from "./components/core/Navbar";
import TaskDetail from "./components/tasks/TaskDetail";
import { TaskProvider } from "./components/tasks/context/TaskContext.context";

function App() {
	return (
		<div className="App">
			{/* in your return, you must have only 1 parent html element. You may have as many children as you like */}
			<Navbar />

			<TaskProvider>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/tasks" element={<TasksHome />} />
					<Route
						exact
						path="/tasks/:taskId"
						element={<TaskDetail />}
					/>
				</Routes>
			</TaskProvider>

			<footer>
				<h3> This is the awesome footer! </h3>
			</footer>
		</div>
	);
}

export default App;
