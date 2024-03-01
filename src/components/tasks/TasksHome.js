import React, { useState, useContext } from "react";
import TaskCreate from "./TaskCreate";
import TaskDisplay from "./TaskDisplay";
import TaskContext from "./context/TaskContext.context";

export default function TasksHome() {
	const [displayForm, setDisplayForm] = useState(false);
	const { message, taskList } = useContext(TaskContext);

	console.log({ messageInHome: message });

	const handleShowForm = () => {
		// setDisplayForm(!displayForm) - better to use prevState format
		setDisplayForm((prevState) => !prevState);
	};

	return (
		<div>
			<button onClick={handleShowForm}>
				{!!displayForm ? "Hide" : "Show"} Form
			</button>
			<br />
			<br />
			<div>
				{!!displayForm && <TaskCreate>Hello Everybody!!!!</TaskCreate>}
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
