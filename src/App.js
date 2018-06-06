import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import activities from './activities'
import ActivityItem from './components/ActivityItem'
import logo from './images/discover_compass_search_explorer-512.png'

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 400px auto;
`
const Title = styled('div')`
  grid-row: 1;
  background-color: #d0eef9;
  margin-bottom: 10px;
  font-size: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled('div')`
  grid-row: 2;
  overflow: scroll;
`

class App extends Component {
  state = {
    activityList: activities,
  }
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid>
        <Title>Discover</Title>
        <List>
          {this.state.activityList.map(activity => {
            return <ActivityItem text={activity.activity} />
          })}
        </List>
      </Grid>
    )
  }
}

export default App
