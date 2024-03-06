import React, { useContext } from "react";
import TaskContext from "../tasks/context/TaskContext.context";

export default function Homepage() {
	const { message } = useContext(TaskContext);

	console.log({ messageInHomePage: message });
	return (
		<div>
			<header className="App-header">Homepage</header>
			<div>
				<h2>
					{" "}
					This is the content for the homepage. See Your message Below
				</h2>
			</div>
			<br />
			<div>
				<p>
					Donec ante libero, porttitor vel porta id, aliquam imperdiet
					enim. Sed aliquet mollis lobortis. Fusce purus libero,
					eleifend ut enim et, ullamcorper sodales lorem. Suspendisse
					potenti. Duis a interdum ante. Pellentesque tincidunt orci
					ac finibus eleifend. Nullam sed est nec purus ultrices
					faucibus sed sit amet dui. Integer fermentum rhoncus est ut
					luctus. Nunc pretium imperdiet dui et iaculis. Integer at
					libero id eros lobortis faucibus. Nam et vehicula eros.
					Nullam in porttitor sem. Ut ac congue nisi, eget fermentum
					nisl. Curabitur aliquam sodales faucibus. Sed eu nisl
					ultricies, consectetur sapien eget, sollicitudin diam.
				</p>
			</div>
			<br />
			<div>
				<aside>
					Etiam sit amet pulvinar enim, sit amet fringilla nisl. Cras
					ullamcorper ipsum ac nunc dignissim euismod. Cras id sapien
					vulputate libero aliquet suscipit. Cras facilisis et nunc id
					tempus. Sed metus velit, laoreet quis velit ut, tempor
					scelerisque lacus. Nam finibus posuere ante, sit amet
					vehicula ante vestibulum in. Proin quis iaculis justo. Fusce
					ultricies at justo consequat fringilla. Nunc non dolor eget
					sem placerat pharetra. Pellentesque elementum ac sapien et
					accumsan. Nam blandit eget nisl in facilisis.
				</aside>
			</div>
		</div>
	);
}
