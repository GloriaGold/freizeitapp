import { createAction } from 'redux-actions'
const Actions = {
  BOOKMARK: 'BOOKMARK',
  TOGGLE_FILTER: 'TOGGLE_FILTER',
}

export default Actions

export const bookmark = createAction(Actions.BOOKMARK)
export const toggleFilter = createAction(Actions.TOGGLE_FILTER)
