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

// Import Data
import mainObjImport from './data/main'
import projectsObjImport from './data/projects'

// Import Components
import Header from './header/header'
import Jumbotron from './jumbotron/jumbotron'

// Import Pages
import Projects from './pages/projects'

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
                <PageContainer>
									
									<Projects
										mainObj={this.props.mainObj}
										projectsObj={this.props.projectsObj} />
									
								</PageContainer>
              )} />
            
            <Route path="/about" exact
              render={ ({match}) => (
                <PageContainer>
									<h1>Projects</h1>
								</PageContainer>
              )} />
            
            <Route path="/contact" exact
              render={ ({match}) => (
                <PageContainer>
									<h1>Projects</h1>
								</PageContainer>
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

const PageContainer = props => (
	<div className="page">
		<div className="container">
			{props.children}
		</div>
	</div>
)

// Render to DOM
ReactDOM.render(
  <Index mainObj={mainObjImport} projectsObj={projectsObjImport} />,
  document.getElementById('root')
)