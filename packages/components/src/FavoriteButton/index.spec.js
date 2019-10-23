import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-emotion'

import FavoriteButton from '.'

describe('FavoriteButton', () => {
  test('Empty', () => {
    const empty = renderer.create(<FavoriteButton isSelected='false'/>).toJSON()
    expect(empty).toMatchSnapshot()
  })
  test('Fiiled', () => {
    const fiiled = renderer.create(<FavoriteButton isSelected='true'/>).toJSON()
    expect(fiiled).toMatchSnapshot()
  })
})
