import React, { useContext } from "react";
import TaskContext from "./context/TaskContext.context";
import { useParams, Link } from "react-router-dom";

export default function TaskDetail() {
	const { taskList } = useContext(TaskContext);

	const { taskId } = useParams();

	const taskToDisplay = taskList[taskId];

	console.log({ taskList, taskId, taskToDisplay });

	return (
		<div className="task-box">
			<Link to={`/tasks/${taskToDisplay.taskId}`}>
				{taskToDisplay.task}
			</Link>
			<h4>Completed: {!!taskToDisplay.completed ? "Yes" : "No"}</h4>
		</div>
	);
}
