import React, { useEffect, useState } from "react";
import "./App.css";

function MyComponent() {
	const [state, setState] = useState(1);
	const [count, setCount] = useState("surya");
	const names = "surya";
	useEffect(() => {
		console.log("sdgsdg");
	}, [state]);

	const clicked = () => {};
	const capturename = () => {};
	return (
		<div>
			<h1>{count}</h1>
			<input placeholder="NAME" onChange={captuename}></input>
			<button onClick={clicked}>clicked</button>
			<h1>{count}</h1>
		</div>
	);
}

export default MyComponent;
