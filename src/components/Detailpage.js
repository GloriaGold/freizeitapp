import React, { Component } from 'react'
import activities from '../activities'

import ActivityDetails from './ActivityDetails'

export default class DetailPage extends Component {
  render() {
    const id = this.props.match.params.id
    const activity = activities.find(activity => activity.id === id)

    return (
      <ActivityDetails
        key={activity.id}
        activity={activity.activity}
        subtitle={activity.subtitle}
        description={activity.description}
        image={activity.image}
      />
    )
  }
}
