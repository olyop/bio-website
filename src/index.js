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

		<p>Test</p>

	</div>
)

// Render to DOM
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)