import React, { Component } from 'react'
import activities from '../activities'

import ActivityDetails from './ActivityDetails'

export default class DetailPage extends Component {
  render() {
    return (
      <div>
        {Object.keys(activities).map(activity => {
          return (
            <ActivityDetails
              title={activity.title}
              description={activity.description}
              image={activity.image}
            />
          )
        })}
      </div>
    )
  }
}
