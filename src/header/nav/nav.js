import React from 'react'
import './nav.css'

import { NavLink } from 'react-router-dom'

const Nav = props => (
	<div className="nav">
		<ul>
			<li><NavLink to="/" exact className="nav-home"><i className="material-icons">home</i></NavLink></li>
			<li><NavLink to="/websites">Websites</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</div>
)

export default Nav