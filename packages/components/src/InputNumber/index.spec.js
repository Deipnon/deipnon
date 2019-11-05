import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import InputNumber from '.'

describe('InputNumber', () => {
  test('renders correctly', () => {
    const test = renderer.create(<InputNumber>).toJSON()
    expect(test).toMatchSnapshot()
  })
})
