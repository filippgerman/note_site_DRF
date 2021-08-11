const TodoItem = ({ todo }) => {
	return (
		<tr>
			<td>
				{todo.name}
			</td>
		</tr>
	)
}

const TodoList = ({ todo }) => {
	if (Object.keys(todo).length != 0) {
		return (
			<table>
				{todo.results.map((todo) => <TodoItem todo={todo}/> )}
			</table>
		)
	}
	return(
			<p>data none</p>
	)
}

export default TodoList;
