import React, { Component } from 'react'
import styled from 'react-emotion'
import ActivityItem from './ActivityItem'
import group from '../images/group.jpg'
import { css } from 'emotion'

const List = styled('div')`
  grid-row: 2;
  overflow: scroll;
`

const Title = styled('div')`
  grid-row: 1;
  background-image:
  background-color: #d0eef9;
  margin-bottom: 10px;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const imageStyle = css`
  background-position: center;
  background-size: 10%;
  width: 100%;
  height: 281px;
`

export default class HomePage extends Component {
  render() {
    return (
      <List>
        <Title>Discover</Title>
        <img className={imageStyle} src={group} />
        {this.props.activities
          .filter(
            activity => (this.props.filter ? activity.isBookmarked : true)
          )
          .map(activity => {
            return (
              <div>
                <ActivityItem
                  key={activity.id}
                  id={activity.id}
                  text={activity.activity}
                  isBookmarked={activity.isBookmarked}
                  bookmark={id => this.props.bookmark(id)}
                />
              </div>
            )
          })}
      </List>
    )
  }
}
