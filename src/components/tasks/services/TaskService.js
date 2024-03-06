import axios from "axios";

export default class TaskService {
	constructor() {
		let service = axios.create({
			baseURL: "localhost:3000",
			withCredentials: true,
		});

		this.service = service;
		this.taskArray = [
			{ task: "Review lesson", completed: true, taskId: 0 },
			{ task: "Review Routing", completed: true, taskId: 1 },
			{ task: "Review Services", completed: true, taskId: 2 },
			{ task: "Review LifeCycle Hooks", completed: true, taskId: 3 },
			{ task: "Create API", completed: false, taskId: 4 },
		];
	}

	getTasks() {
		// return this.service.get("/api/tasks").then((resp) => resp.data);
		return this.taskArray;
	}

	updateTasks(taskToUpdate) {
		// return this.service.put("/api/tasks", {taskToUpdate}).then((resp) => resp.data);

		const updatedArray = this.taskArray.map((task) => {
			if (taskToUpdate.taskId === task.taskId) {
				return taskToUpdate;
			} else {
				return task;
			}
		});

		this.taskArray = updatedArray;
	}
}
