import React, { createContext, useState } from "react";

const TaskContext = createContext({});

export const TaskProvider = ({ children }) => {
	const [taskList, setTaskList] = useState([
		{ task: "Review lesson", completed: false, taskId: 0 },
	]);

	const addNewTaskToList = (task) => {
		setTaskList((prevState) => [...prevState, task]);
		// console.log({ task });
	};

	const data = { message: "hello World", taskList, addNewTaskToList };

	return (
		<TaskContext.Provider value={{ ...data }}>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
