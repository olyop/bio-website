import React from 'react'
import './projects.css'

class Project extends React.Component {
	
	constructor(props) {
		super(props)
		
		this.state = {
			obj: props.obj
		}
	}
	
	render() {
		const project = this.state.obj
		return (
			<div className="project">
				
				<div className="project-cover"
					style={{ backgroundImage: 'url(' + project.cover + ')' }} />
				
				<div className="project-info">
					<h2>{project.title}</h2>
					<p>{project.desc}</p>
				</div>
				
			</div>
		)
	}
}

const Projects = props => (
	<div className="projects">
		
		<h1>Projects</h1>
		<div className="projects-list">
			{props.projectsObj.map(project => (
				<Project key={project.id}
					obj={project} />
			))}
		</div>
		
	</div>
)

export default Projects