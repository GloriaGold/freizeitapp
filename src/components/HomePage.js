import React, { Component } from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'

import ActivityItem from '../components/Activityitem'
import FooterView from '../containers/FooterView'
import titleImage from '../images/Discover_Background.png'

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 60px auto 47px;
`

const List = styled('div')`
  grid-row: 2;
  overflow: scroll;
`

const Title = styled('div')`
  grid-row: 1;
  background-color: #d6c1f5;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const imageStyle = css`
  width: auto;
  height: auto;
`

export default class HomePage extends Component {
  render() {
    return (
      <Grid>
        <Title>ACTIVITIES</Title>
        <List>
          <img className={imageStyle} src={titleImage} alt="discover" />

          {this.props.activities
            .filter(
              activity => (this.props.filter ? activity.isBookmarked : true)
            )
            .map(activity => {
              return (
                <div key={activity.id}>
                  <ActivityItem
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
