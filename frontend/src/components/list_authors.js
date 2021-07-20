const AuthorItem = ({author}) => {
	return(
		<tr>
			<td>
			{author.username}
		</td>
			<td>
			{author.first_name}
		</td>
			<td>
			{author.last_name}
		</td>
			<td>
			{author.email}
		</td>
		</tr>
	)
}

const AuthorsList = ({authors}) => {
	return(
		<table>
			<tr>
			<td>
			username
		</td>
			
			<td>
			first_name
		</td>
			
			<td>
			last_name
		</td>

		    <td>
			email
		</td>
			</tr>
			{authors.map((author) => <AuthorItem author= {author} />)}
		</table>
	)
}

export default AuthorsList;
