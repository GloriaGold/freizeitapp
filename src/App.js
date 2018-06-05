import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import styled from 'react-emotion'
import Activitylist from './Activitylist'
import Activityitem from './components/Activityitem'
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

    this.state = {
      activitylist: Activitylist,
    }
  }

  render() {
    return (
      <Grid>
        <Title>Discover</Title>
        <List>
          {this.state.activitylist.map(activity => {
            return <Activityitem text={activity.activity} />
          })}
        </List>
      </Grid>
    )
  }
}

export default App
