import React, { Component } from 'react'
import styled from 'react-emotion'
import ActivityItem from './ActivityItem'

const List = styled('div')`
  grid-row: 2;
  overflow: scroll;
`

export default class HomePage extends Component {
  render() {
    return (
      <List>
        {this.props.activities
          .filter(
            activity => (this.props.filter ? activity.isBookmarked : true)
          )
          .map(activity => {
            return (
              <ActivityItem
                key={activity.id}
                id={activity.id}
                text={activity.activity}
                isBookmarked={activity.isBookmarked}
                bookmark={id => this.props.bookmark(id)}
              />
            )
          })}
      </List>
    )
  }
}
