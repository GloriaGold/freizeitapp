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
  constructor(props) {
    super(props)
  }

  state = {
    activities: activities,
  }

  bookmark(id) {
    const foundActivityIndex = this.state.activities.findIndex(
      activity => activity.id === id
    )

    const foundActivity = this.state.activities[foundActivityIndex]

    const startOfNewArray = this.state.activities.slice(0, foundActivityIndex)
    const endOfNewArray = this.state.activities.slice(foundActivityIndex + 1)
    const newObject = {
      ...foundActivity,
      isBookmarked: !foundActivity.isBookmarked,
    }
    console.log(newObject)

    this.setState({
      activities: [...startOfNewArray, newObject, ...endOfNewArray],
    })
  }

  render() {
    return (
      <Grid>
        <Title>Discover</Title>
        <List>
          {this.state.activities.map(activity => {
            return (
              <ActivityItem
                text={activity.activity}
                isBookmarked={activity.isBookmarked}
                onBookmark={() => this.bookmark(activity.id)}
              />
            )
          })}
        </List>
      </Grid>
    )
  }
}

export default App
