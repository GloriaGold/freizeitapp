import Actions from '../actions'

export default (state, action) => {
  switch (action.type) {
    case Actions.BOOKMARK:
      const id = action.payload

      const foundActivityIndex = state.activities.findIndex(
        activity => activity.id === id
      )

      const foundActivity = state.activities[foundActivityIndex]

      const startOfNewArray = state.activities.slice(0, foundActivityIndex)
      const endOfNewArray = state.activities.slice(foundActivityIndex + 1)
      const newObject = {
        ...foundActivity,
        isBookmarked: !foundActivity.isBookmarked,
      }

      return {
        ...state,
        activities: [...startOfNewArray, newObject, ...endOfNewArray],
      }

    case Actions.TOGGLE_FILTER:
      return {
        ...state,
        filter: !this.state.filter,
      }

    default:
      break
  }
}
