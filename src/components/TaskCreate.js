import React, { useState } from "react";

export default function TaskCreate({ addNewTask }) {
	console.log({ addNewTask });

	const [formData, setFormData] = useState({ task: "", completed: false });

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
		event.preventDefault();

		console.log({ formData });
		addNewTask(formData);

		setTimeout(() => {
			setFormData({ task: "", completed: false });
		}, 10);
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
