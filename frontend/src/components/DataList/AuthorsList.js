const AuthorItem = ({ author }) => {
	return (
		<tr>
			<td>
				{author.username}
			</td>
			<td>
				{author.email}
			</td>
		</tr>
	)
}

const AuthorsList = ({ authors }) => {
	if (Object.keys(authors).length != 0) {
		return (
			<table>
				{authors.results.map((author) => <AuthorItem author={author}/> )}
			</table>
		)
	}
	return(
			<p>data none</p>
	)
}

export default AuthorsList;
