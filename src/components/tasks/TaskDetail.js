import React, { useState, useEffect } from "react";
// import TaskContext from "./context/TaskContext.context";
import { useParams, Link } from "react-router-dom";
import TaskService from "./services/TaskService";

export default function TaskDetail() {
	const [taskToDisplay, setTaskToDisplay] = useState(null);
	// const { taskList } = useContext(TaskContext);
	const service = new TaskService();
	const { taskId } = useParams();

	useEffect(() => {
		setDisplayTask();
	}, []);

	// const taskToDisplay = taskList[taskId];
	const setDisplayTask = async () => {
		console.log({ taskId });

		const taskFromApi = await service.getTaskDetails(taskId);

		console.log({ taskDetails: taskFromApi.data });

		setTaskToDisplay(taskFromApi.data);
	};

	const displayTask = () => {
		return !!taskToDisplay ? (
			<div className="task-box">
				<Link to={`/tasks/${taskToDisplay.taskId}`}>
					{taskToDisplay.task}
				</Link>
				<h4>Completed: {!!taskToDisplay.completed ? "Yes" : "No"}</h4>
			</div>
		) : (
			<div>Loading...</div>
		);
	};

	console.log({ taskId, taskToDisplay });

	return displayTask();
}
