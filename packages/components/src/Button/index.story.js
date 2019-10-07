import React from 'react'
import { storiesOf } from '@storybook/react'

import Button from '.'

storiesOf('Button', module)
    .add('Primary', () => <Button color="primary" type="button">{'Primary'}</Button>)
    .add('Secondary', () => <Button color="secondary" type="submit">{'Secondary'}</Button>)
    .add('Primary Block', () => <Button color="primary" block type="submit">{'Primary Block'}</Button>)
    .add('Secondary Block', () => <Button color="secondary" block type="button">{'Secondary Block'}</Button>)