import React from "react";
import "./Tasks.css";

export default function TaskDisplay({ taskList }) {
	console.log({ taskList });

	const displayTasks = () => {
		return taskList.map((oneTask, i) => {
			return (
				<div className="task-box">
					<h3>{oneTask.task}</h3>
					<h4>Completed: {!!oneTask.completed ? "Yes" : "No"}</h4>
				</div>
			);
		});
	};

	return <div className="task-container">{displayTasks()}</div>;
}
