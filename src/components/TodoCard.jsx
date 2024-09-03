/* eslint-disable react/prop-types */
const TodoCard = (props) => {
	console.log(props);
	const { children, handleDeleteTodos, index } = props;
	return (
		<li className="todoItem">
			{children}
			<div className="actionsContainer">
				<button
					onClick={() => {
						console.log(typeof handleDeleteTodos);
						handleDeleteTodos(index);
					}}
				>
					<i className="fa-solid fa-trash"></i>
				</button>
			</div>
		</li>
	);
};

export default TodoCard;
