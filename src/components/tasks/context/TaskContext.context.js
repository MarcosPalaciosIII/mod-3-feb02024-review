import React, { createContext, useState } from "react";
import TaskService from "../services/TaskService";

const TaskContext = createContext({});
const service = new TaskService();

export const TaskProvider = ({ children }) => {
	const [taskList, setTaskList] = useState([]);

	const addNewTaskToList = (task) => {
		setTaskList((prevState) => [...prevState, task]);
		// console.log({ task });
	};

	const getAllTasks = async () => {
		const tasksFromApi = await service.getTasks();

		setTaskList((prevState) =>
			!!prevState.length ? prevState : tasksFromApi
		);
	};

	const data = {
		message: "hello World",
		taskList,
		addNewTaskToList,
		getAllTasks,
	};

	return (
		<TaskContext.Provider value={{ ...data }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
