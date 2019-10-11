'use strict'

import { storiesOf } from '@storybook/react'
import React from 'react'
import Repositories from './index'

storiesOf('Repositories', module)
  .add('with title prop', () => (
    <Repositories title='Favoritos' />
  ))

  .add('with repos', () => (
    <Repositories
      title='Favoritos'
      repos={[{
        link: 'https://www.lipsum.com/',
        name: 'Lorem Ipsum'
      }]}
    />
  ))
