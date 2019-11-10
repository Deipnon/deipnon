import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import InfoButton from '.'

describe('InfoButton', () => {
  test('Info', () => {
    const info = renderer.create(<InfoButton/>).toJSON()
    expect(info).toMatchSnapshot()
  })
})
