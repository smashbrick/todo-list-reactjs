import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
	const [todos, setTodos] = useState([]);

	function handleAddTodos(newTodo) {
		let newTodoList = [...todos, newTodo];
		setTodos(newTodoList);
	}

	function handleDeleteTodos(index) {
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index;
		});
		setTodos(newTodoList);
	}

	// handleEdittodos(){

	// }

	return (
		<>
			<TodoInput handleAddTodos={handleAddTodos} />
			<TodoList handleDeleteTodos={handleDeleteTodos} todos={todos} />
		</>
	);
}

export default App;
