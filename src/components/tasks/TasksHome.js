import React from "react";
import TaskDetail from "./TaskDetail";
import { TaskProvider } from "./context/TaskContext.context";
import { Routes, Route } from "react-router-dom";
import TaskHomeDisplayContent from "./TaskHomeDisplayContent";

export default function TasksHome() {
	return (
		<TaskProvider>
			<Routes>
				<Route path="/" element={<TaskHomeDisplayContent />} />

				<Route exact path="/:taskId" element={<TaskDetail />} />
			</Routes>
		</TaskProvider>
	);
}
