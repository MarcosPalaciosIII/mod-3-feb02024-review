import axios from "axios";

export default class TaskService {
	constructor() {
		let service = axios.create({
			baseURL: "http://localhost:5005/api/tasks",
			// withCredentials: true,
		});

		this.service = service;
		// this 'was' the dummy data
		// this.taskArray = [
		// 	{ task: "Review lesson", completed: true, taskId: 0 },
		// 	{ task: "Review Routing", completed: true, taskId: 1 },
		// 	{ task: "Review Services", completed: true, taskId: 2 },
		// 	{ task: "Review LifeCycle Hooks", completed: true, taskId: 3 },
		// 	{ task: "Create API", completed: false, taskId: 4 },
		// ];
	}

	addTask(task) {
		return this.service.post("/", task).then((resp) => resp.data);
	}

	deleteTask(taskId) {
		return this.service.delete(`/${taskId}`).then((resp) => resp.data);
	}

	getTasks() {
		return this.service.get("/").then((resp) => resp.data);
		// return this.taskArray;
	}

	getTaskDetails(taskId) {
		console.log({ serviceTaskId: taskId });

		return this.service.get(`/${taskId}`).then((resp) => {
			console.log({ resp: resp.data });

			return resp.data;
		});
	}

	updateTasks(taskToUpdate) {
		return this.service
			.put(`/${taskToUpdate._id}`, { taskToUpdate })
			.then((resp) => resp.data);

		// const updatedArray = this.taskArray.map((task) => {
		// 	if (taskToUpdate.taskId === task.taskId) {
		// 		return taskToUpdate;
		// 	} else {
		// 		return task;
		// 	}
		// });

		// this.taskArray = updatedArray;
	}
}
