// @ts-nocheck

import React, { useState } from 'react';
// import { useRouter } from 'next/router'

function ToDoApp() {
	const [items, setItems] = useState([]); // useState to store the to-do items
	// const router = useRouter();

	// handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const input = form.querySelector('input');

		// add the new to-do item to the array of items
		setItems([...items, input.value]);
		input.value = '';
	};

	// handle item removal
	const handleRemove = (index) => {
		// create a new array without the item at the specified index
		const newItems = items.filter((item, i) => i !== index);
		setItems(newItems);
	};

	return (
		<div>
			<h1>To-Do App</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' placeholder='Add a new item' />
				<button type='submit'>Add</button>
			</form>
			<ul>
				{items.map((item, index) => (
					<li key={index}>
						{item}
						<button type='button' onClick={() => handleRemove(index)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDoApp;
