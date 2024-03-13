import React, { createContext, useState } from "react";
import TaskService from "../services/TaskService";

const TaskContext = createContext({});
const service = new TaskService();

export const TaskProvider = ({ children }) => {
	const [taskList, setTaskList] = useState([]);

	// const addNewTaskToList = (task) => {
	// 	setTaskList((prevState) => [...prevState, task]);
	// 	// console.log({ task });
	// };

	const getAllTasks = async () => {
		const tasksFromApi = await service.getTasks();

		// console.log({ tasksFromApi: tasksFromApi.data });

		// no longer needed as we are not using dummy data any more
		// setTaskList((prevState) =>
		// 	!!prevState.length ? prevState : tasksFromApi.data
		// );
		setTaskList(tasksFromApi.data);
	};

	const createTask = async (task) => {
		const createdTask = await service.addTask(task);

		getAllTasks();

		return createdTask;
	};

	const updateTask = async (task) => {
		const updatedTask = await service.updateTasks(task);

		// console.log({ updatedTask });

		getAllTasks();

		return updatedTask;
	};

	const data = {
		message: "hello World",
		taskList,
		addNewTaskToList: createTask,
		getAllTasks,
		updateTask,
	};

	return (
		<TaskContext.Provider value={{ ...data }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
