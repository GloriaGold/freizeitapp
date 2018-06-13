import React, { Component } from 'react'
import styled from 'react-emotion'
import activities from './activities'
import ActivityItem from './components/ActivityItem'
import Detailpage from './components/Detailpage'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 400px auto 40px;
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

const List = styled('div')`
  grid-row: 2;
  overflow: scroll;
`

const Footer = styled('div')`
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;
  background-color: #d6c1f5;
`

class App extends Component {
  state = {
    activities: activities,
    filter: false,
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

    this.setState({
      activities: [...startOfNewArray, newObject, ...endOfNewArray],
    })
  }
  toggleFilter = () => {
    this.setState({
      filter: !this.state.filter,
    })
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Route exact path="/" render={<div>Hello world</div>} />
            <Route
              path="/Detail"
              render={() => <Detailpage activity={this.state.activities} />}
            />
          </div>
          <Grid>
            <Title>Discover</Title>
            <List>
              {this.state.activities
                .filter(
                  activity => (this.state.filter ? activity.isBookmarked : true)
                )
                .map(activity => {
                  return (
                    <ActivityItem
                      text={activity.activity}
                      isBookmarked={activity.isBookmarked}
                      onBookmark={() => this.bookmark(activity.id)}
                    />
                  )
                })}
            </List>
            <Footer>
              <button onClick={this.toggleFilter}>show favorites</button>
            </Footer>
          </Grid>
        </div>
      </Router>
    )
  }
}

export default App
