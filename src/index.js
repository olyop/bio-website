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
class Index extends React.Component {
  render() {
    return (
      <Router>
        <div className="index">

          <Header />

          <Switch>

            <Route path="/" exact
              render={ ({match}) => (
                <Jumbotron
                  match={match} />
              )} />
            
            <Route path="/projects" exact
              render={ ({match}) => (
                <div className="page">
                  <div className="container">
                    <h1>Projects</h1>
                  </div>
                </div>
              )} />
            
            <Route path="/about" exact
              render={ ({match}) => (
                <div className="page">
                  <div className="container">
                    <h1>About</h1>
                  </div>
                </div>
              )} />
            
            <Route path="/contact" exact
              render={ ({match}) => (
                <div className="page">
                  <div className="container">
                    <h1>Contact</h1>
                  </div>
                </div>
              )} />

            <Route
              render={ ({match}) => (
                <div className="container page">Error 404 - page not found</div>
              )} />

          </Switch>

        </div>
      </Router>
    )
  }
}

// Render to DOM
ReactDOM.render(
  <Index />,
  document.getElementById('root')
)