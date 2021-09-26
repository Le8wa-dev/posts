import React, { useState } from 'react'

export const Counter = () => {
	let [count, setCount] = useState(5);
	function increment() {
		setCount(count + 1)
	}
	function decrement() {
		setCount(count - 1)
	}
	return (
		<div>
			<div className="App">
				<h1>{count}</h1>
				<button onClick={increment}>Increment</button>
				<button onClick={decrement}>Decrement</button>
			</div>
		</div>
	)
}
