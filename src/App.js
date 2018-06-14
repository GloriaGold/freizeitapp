import React, { Component } from 'react'
import styled from 'react-emotion'

import DetailPage from './components/DetailPage'
import HomePageView from './containers/HomePageView'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import FooterView from './containers/FooterView'

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

const Footer = styled('div')`
  grid-row: 3;
  display: flex;
  justify-content: space-evenly;
  background-color: #d6c1f5;
`

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
console.log(store)

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Grid>
            <Title>Discover</Title>
            <Route exact path="/" render={() => <HomePageView />} />
            <Route path={`/detail/`} render={() => <DetailPage />} />

            <FooterView />
          </Grid>
        </Provider>
      </Router>
    )
  }
}

export default App
