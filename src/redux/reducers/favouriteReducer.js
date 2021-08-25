const INITIAL_STATE = []
const favouriteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...state, action.payload]
      break

    case 'REMOVE_LIST':
      return state.filter(favourite => favourite.id !== action.id)
      break

    default:
      return state
      break
  }
}

export default favouriteReducer
