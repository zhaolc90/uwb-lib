import expect from 'expect'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'

import {Toggle} from '../lib'

describe('Component', () => {
  let node

  beforeEach(() => {
    node = document.createElement('div')
  })

  afterEach(() => {
    unmountComponentAtNode(node)
  })

  it('displays a welcome message', () => {
    render(<Toggle/>, node, () => {
      expect(node.innerHTML).toContain('Welcome to React components')
    })
  })
})

describe('Minimal unit test', () => {
  it('informs the reader', () => {
    expect('tautology').toEqual('tautology')
  })
})
