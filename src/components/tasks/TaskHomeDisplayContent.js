import React, { useState, useContext, useEffect } from "react";
import TaskContext from "./context/TaskContext.context";
import TaskCreate from "./TaskCreate";
import TaskDisplay from "./TaskDisplay";

export default function TaskHomeDisplayContent(props) {
	const [displayForm, setDisplayForm] = useState(false);
	const { message, taskList, getAllTasks } = useContext(TaskContext);

	// console.log({ messageInHome: message });

	useEffect(() => {
		console.log({ location: props.location });
		getAllTasks();
	}, []);

	const handleShowForm = () => {
		// setDisplayForm(!displayForm) - better to use prevState format
		setDisplayForm((prevState) => !prevState);
	};

	return (
		<div>
			<br />
			<h2>Task Home Page </h2>
			<br />
			<br />
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

// import React, { Component } from 'react'

// export default class TaskHomeDisplayContent extends Component {

// **  THIS IS AN INFINITE LOOP **
// useEffect(() => {

// })

// componentDidMount() {
// 	// when the component load for the first time.
// }

// useEffect(() => {
// 	// useEffect with [] as 2nd param will run this when component loads
// }, []);

// componentDidUpdate() {
// 	// when something is updated in the component.
// }

// useEffect(() => {

// }, [yourVariablesHere])

// useEffect(() => {

// }, [secondVar])

// useEffect(() => {

// }, [thirdVar])

// 	// componentDidUnmount() {

// 	// }

// 	// componentWillUnmount() {

// 	// }

// 	useEffect(() => {

// 	  return () => {

// 	  }
// 	},[])

//   render() {
// 	return (
// 	  <div>TaskHomeDisplayContent</div>
// 	)
//   }
// }
