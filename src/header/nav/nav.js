import React from 'react'
import './nav.css'

import { NavLink } from 'react-router-dom'

const Nav = props => (
	<div className="nav">
		<ul>
			<li><NavLink to="/" exact className="nav-home"><i className="material-icons">home</i></NavLink></li>
			<li><NavLink to="/projects">Projects</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
			<li><NavLink to="/contact">Contact</NavLink></li>
		</ul>
	</div>
)

export default Nav