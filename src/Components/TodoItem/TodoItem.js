const TodoItem = ({ deleteTodo, editTodo, props, handleCompleted }) => {
	const { id, title, isCompleted } = props;

	return (
		<li className='siteItem d-flex justify-content-between'>
			<div className='form-check'>
				<input
					checked={isCompleted}
					onChange={handleCompleted}
					data-id={id}
					type='checkbox'
					className='checkbox form-check-input'
				/>
			</div>
			<strong
				className={
					isCompleted ? 'text-decoration-line-through text-success' : 'text'
				}>
				{title}
			</strong>
			<div>
				<button onClick={editTodo} data-id={id} className='btn btn-warning'>
					Edit
				</button>
				<button onClick={deleteTodo} data-id={id} className='btn btn-danger'>
					Delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
