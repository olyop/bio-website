import React from 'react'
import './header.css'

import Nav from "./nav/nav"

const Header = props => (
	<div className="header">
		<div className="container">
			<div className="header-inner">

				<a href="/"><img className="logo" src="http://via.placeholder.com/200x80" alt="Logo" /></a>

				<Nav />

			</div>
		</div>
	</div>
)

export default Header