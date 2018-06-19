import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

import ActivityItem from './ActivityItem'
import FooterView from '../containers/FooterView'
import group from '../images/group.jpg'

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
  width: auto;
  height: 281px;
`

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 230px auto 47px;
`

export default class HomePage extends Component {
  render() {
    return (
      <Grid>
        <Title>Discover</Title>
        <List>
          <img className={imageStyle} src={group} alt="group" />
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
        <FooterView />
      </Grid>
    )
  }
}
