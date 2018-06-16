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
import activities from './activities'

const Header = styled('header')`
  width: 100%;
  height: 91px;
  background-color: #d6c1f5;
`

const Grid = styled('div')`
  display: grid;
  grid-template-rows: 400px auto 40px;
`

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends Component {
  render() {
    const state = store.getState()
    return (
      <Router>
        <Provider store={store}>
          <Grid>
            <Route exact path="/" render={() => <HomePageView />} />
            <FooterView />
            <Route
              path={`/information/:id`}
              render={props => (
                <DetailPage match={props.match} activities={state.activities} />
              )}
            />
          </Grid>
        </Provider>
      </Router>
    )
  }
}

export default App
