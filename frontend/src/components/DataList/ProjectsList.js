const ProjectItem = ({ project }) => {
	return (
		<tr>
			<td>
				{project.name}
			</td>
			<td>
				{project.url}
			</td>
		</tr>
	)
}

const ProjectsList = ({ projects }) => {
	if (Object.keys(projects).length != 0) {
		return (
			<table>
				{projects.results.map((project) => <ProjectItem project={project}/> )}
			</table>
		)
	}
	return(
			<p>data none</p>
	)
}

export default ProjectsList;
