import React from 'react'
import './jumbotron.css'

import { NavLink } from 'react-router-dom'

// Import jumbotron image
import JumbotronJPG from './jumbotron.jpg'

const Jumbotron = props => (
  <div className="jumbotron"
    style={{ backgroundImage: 'url(' + JumbotronJPG + ')' }}>
    <div className="jumbotron-inner">
      
      <div className="jumbotron-text">
        <h1>"I create your <br /><b>software solutions</b>."</h1>
        <hr />
        <h2>Oliver Plummer</h2>
      </div>
      
      <NavLink to="/projects" exact className="jumbotron-explore">
        <i className="material-icons">keyboard_arrow_up</i>
        <p>Explore</p>
      </NavLink>
      
    </div>
  </div>
)

export default Jumbotron