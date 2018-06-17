import React, {Component} from 'react'
import {render} from 'react-dom'

import {Toggle} from '../../lib'

class Demo extends Component {
  render() {
    return <div>
      <h1>uwb-lib Demo</h1>
      <Toggle/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
