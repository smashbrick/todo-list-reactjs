import { useState } from "react";

function TodoInput(props) {
	// eslint-disable-next-line react/prop-types
	const { handleAddTodos } = props;
	const [todoValue, setTodoValue] = useState("");
	return (
		<header>
			<input
				type="Enter todo..."
				value={todoValue}
				onChange={(e) => {
					setTodoValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					handleAddTodos(todoValue);
					setTodoValue("");
				}}
			>
				Add
			</button>
		</header>
	);
}

export default TodoInput;
