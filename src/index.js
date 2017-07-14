// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import Components


// Index
const Index = props => (
	<div className="index">

		<h1>Test</h1>
		<i className="material-icons">done</i>

	</div>
)

// Render to DOM
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)