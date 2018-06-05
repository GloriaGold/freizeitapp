import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Activityitem from '../src/components/Activityitem'
import Activitylist from '../src/Activitylist'

storiesOf('Activityitem', module).add('listitem', () => (
  <Activityitem text={'tanzen'} />
))
