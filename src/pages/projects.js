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
    
    let backgroundStyle = { backgroundImage: `url(${project.cover}` }
    
		return (
			<div className="project">
				
				<div className="project-cover"
					style={backgroundStyle} />
				
				<div className="project-info">
					<h2><span>{project.title}</span></h2>
					<p><span>{project.desc}</span></p>
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