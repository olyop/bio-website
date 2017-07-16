// Import React
import React from 'react'
import ReactDOM from 'react-dom'

// Import CSS
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import './index.css'

// Import React Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Components
import Header from './header/header'
import Jumbotron from './jumbotron/jumbotron'

// Index
const Index = props => (
	<Router>
		<div className="index">

			<Header />

			<Switch>
				
				<Route path="/" exact render={ ({ match }) => <Jumbotron match={match} /> } />
				<Route path="/websites" exact
					render={ ({ match }) => <div className="container page">Websites</div> } />
				
				<Route render={ ({ match }) => <div className="container page">Error 404 - page not found</div> } />
				
			</Switch>

		</div>
	</Router>
)

// Render to DOM
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)