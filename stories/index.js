import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ActivityItem from '../src/components/ActivityItem'
import activities from '../src/activities'

storiesOf('ActivityItem', module).add('listitem', () => (
  <ActivityItem text={'tanzen'} />
))
