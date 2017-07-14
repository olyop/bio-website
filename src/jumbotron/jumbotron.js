import React from 'react'
import './jumbotron.css'

// Import jumbotron image
import JumbotronJPG from './jumbotron.jpg'

const Jumbotron = props => (
	<div className="jumbotron"
		style={{ backgroundImage: 'url(' + JumbotronJPG + ')' }}>
		<div className="jumbotron-inner">
			<h1>I create software solutions for you.</h1>
		</div>
	</div>
)

export default Jumbotron