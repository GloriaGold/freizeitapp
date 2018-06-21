import React, { Component } from 'react'

import DetailPage from './components/DetailPage'
import HomePageView from './containers/HomePageView'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers/reducer'
import initialState from './reducers/initialState'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
          <div>
            <Route exact path="/" component={HomePageView} />
            <Route
              path={`/information/:id`}
              render={props => (
                <DetailPage match={props.match} activities={state.activities} />
              )}
            />
          </div>
        </Provider>
      </Router>
    )
  }
}

export default App
