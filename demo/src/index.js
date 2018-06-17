import React, {Component} from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Navbar } from '../../lib'
import '../../css/style.css'

import About from './pages/About'
import WelcomePage from './pages/WelcomePage'
const NoMatch = (props) => {
  return <span>Nothing found</span>
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Design-Site</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Text>
                uwb-lib Demo
              </Navbar.Text>
              <Navbar.Text pullRight>Have a great day!</Navbar.Text>
            </Navbar.Collapse>
          </Navbar>
          <div className={"container-fluid"}>
            <Switch>
              <Route exact path="/" component={WelcomePage}/>
              <Route path="/about" component={About}/>
              {/* <Route path="users" component={Users}>
                <Route path="/user/:userId" component={User}/>
              </Route> */}
              <Route path="*" component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App/>, document.querySelector('#demo'))
