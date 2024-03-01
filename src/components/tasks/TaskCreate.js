import React, { useState, useContext } from "react";
import TaskContext from "./context/TaskContext.context";
import { useNavigate } from "react-router-dom";

export default function TaskCreate({ children }) {
	console.log({ children });
	const navigateTo = useNavigate();

	const [formData, setFormData] = useState({ task: "", completed: false });

	const { addNewTaskToList, message, taskList } = useContext(TaskContext);

	console.log({ messageInHomePage: message });

	const handleChange = (event) => {
		// console.log({ [event.target.name]: event.target.value });
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));
	};

	const handleChecked = (event) => {
		// console.log({ [event.target.name]: event.target.checked });
		setFormData((prevState) => ({
			...prevState,
			[event.target.name]: event.target.checked,
		}));
	};

	const handleSubmit = (event) => {
		const taskId = taskList.length;
		event.preventDefault();

		console.log({ formData });
		// addNewTask(formData);
		addNewTaskToList({ ...formData, taskId });

		setTimeout(() => {
			setFormData({ task: "", completed: false });
		}, 10);

		navigateTo(`/tasks/${taskId}`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Task:{" "}
				<input
					onChange={(event) => handleChange(event)}
					name="task"
					type="text"
					value={formData.task}
				/>
			</label>
			<label>
				completed:{" "}
				<input
					onChange={handleChecked}
					name="completed"
					type="checkbox"
					checked={formData.completed}
				/>
			</label>
			<button>Add Task</button>
		</form>
	);
}
