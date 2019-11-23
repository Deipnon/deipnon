import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import InfoButton from '.'

describe('InfoButton', () => {
  test('Info', () => {
    const info = renderer.create(<InfoButton onClick={() => {}} />).toJSON()
    expect(info).toMatchSnapshot()
  })
})
