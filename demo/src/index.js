import React, {Component} from 'react'
import {render} from 'react-dom'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Toggle,Navbar } from '../../lib'
import '../../css/style.css'

class App extends Component {
  render() {
    return <div>
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
      <h2>Toggle</h2>
      <Toggle />
      <hr/>
    </div>
  }
}

render(<App/>, document.querySelector('#demo'))
