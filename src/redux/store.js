import { createStore, combineReducers } from 'redux'
import favouriteReducer from '../redux/reducers/favouriteReducer'

const reducers = combineReducers({
  favourite: favouriteReducer,
})

const store = createStore(reducers)

export default store
