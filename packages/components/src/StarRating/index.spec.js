import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import Rating from '.'

describe('Rating', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Rating max="5" value="5" onClick={() => {}}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
