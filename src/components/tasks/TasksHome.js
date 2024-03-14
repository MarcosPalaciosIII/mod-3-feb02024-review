import React from "react";
import TaskDetail from "./TaskDetail";
import { TaskProvider } from "./context/TaskContext.context";
import { Routes, Route } from "react-router-dom";
import TaskHomeDisplayContent from "./TaskHomeDisplayContent";

export default function TasksHome() {
	console.log({ UserInTasksHome: JSON.parse(localStorage.getItem("user")) });
	return (
		<TaskProvider>
			<Routes>
				<Route path="/" element={<TaskHomeDisplayContent />} />

				<Route exact path="/:taskId" element={<TaskDetail />} />
			</Routes>
		</TaskProvider>
	);
}
