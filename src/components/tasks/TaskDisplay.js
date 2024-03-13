import React from "react";
import "./Tasks.css";
import { Link } from "react-router-dom";

export default function TaskDisplay({ taskList }) {
	console.log({ taskList });

	const displayTasks = () => {
		return taskList.map((oneTask, i) => {
			return (
				<div className="task-box" key={i}>
					<Link to={`/tasks/${oneTask._id}`}>{oneTask.task}</Link>
					<h4>Completed: {!!oneTask.completed ? "Yes" : "No"}</h4>
				</div>
			);
		});
	};

	return <div className="task-container">{displayTasks()}</div>;
}
