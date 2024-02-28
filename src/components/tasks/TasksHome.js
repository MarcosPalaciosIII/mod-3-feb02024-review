import React, { useState } from "react";
import TaskCreate from "./TaskCreate";
import TaskDisplay from "./TaskDisplay";

export default function TasksHome() {
	const [displayForm, setDisplayForm] = useState(false);
	const [taskList, setTaskList] = useState([
		{ task: "Review lesson", completed: false },
	]);

	const handleShowForm = () => {
		// setDisplayForm(!displayForm) - better to use prevState format
		setDisplayForm((prevState) => !prevState);
	};

	const addNewTaskToList = (task) => {
		setTaskList((prevState) => [...prevState, task]);
		// console.log({ task });
	};

	// console.log({ taskList });
	return (
		<div>
			<button onClick={handleShowForm}>
				{!!displayForm ? "Hide" : "Show"} Form
			</button>
			<br />
			<br />
			<div>
				{!!displayForm && <TaskCreate addNewTask={addNewTaskToList} />}
			</div>
			<br />
			<br />
			<div>
				{taskList.length > 0 ? (
					<TaskDisplay taskList={taskList} />
				) : (
					"No Tasks to Display"
				)}
			</div>
		</div>
	);
}
