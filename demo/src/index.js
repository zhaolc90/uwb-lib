import React, {Component} from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {Grid, Col, Row} from 'react-bootstrap'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'

import { Navbar } from '../../lib'
import '../../css/style.css'

import urls from './utils'

const NoMatch = (props) => {
  return <span>Nothing found</span>
}
const Slider = (props) => {
  return (
    <ul role="nav">
      {props.urls.map((item, i) =>
        <li><Link key={i} to={item.path}>{item.name}</Link></li>)
      }
    </ul>
  )
}
const PageContainer = (props) => {
  return (
      props.urls.map((item, i) =>
        <Route key={i} exact={item.exact} path={item.path} component={item.Page.default} />)
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Design-Site</a>
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
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={2}>
                <Slider urls={urls}/>
              </Col>
              <Col xs={10} md={10}>
                <Switch>
                    <PageContainer urls={urls}/>
                </Switch>
              </Col>
            </Row>
          </Grid>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

render(<App/>, document.querySelector('#demo'))
