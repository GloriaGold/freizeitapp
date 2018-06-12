import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react'

import ActivityItem from '../src/components/ActivityItem'

storiesOf('ActivityItem', module)
  .addDecorator(withKnobs)
  .add('listItem', () => <ActivityItem text={'tanzen'} isBookmarked={false} />)

  .add('notBookmarked', () => (
    <ActivityItem text={'grillen'} isBookmarked={false} />
  ))

  .add('bookmarked', () => (
    <ActivityItem text={'grillen'} isBookmarked={true} />
  ))
