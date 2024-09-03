/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

function TodoList(props) {
	// eslint-disable-next-line react/prop-types
	console.log(props);
	const { todos, handleDeleteTodos } = props;
	return (
		<ul className="main">
			{todos.map((todo, todoIndex) => {
				return (
					<TodoCard
						handleDeleteTodos={handleDeleteTodos}
						key={todoIndex}
						index={todoIndex}
					>
						<p>{todo}</p>
					</TodoCard>
				);
			})}
		</ul>
	);
}

export default TodoList;
