import { combineReducers } from 'redux'
import notificationsReducers from './notificationsReducers'
import errorReducer from './errorReducers'
import gameReducer from './gameReducer'

export default combineReducers({
  game: gameReducer,
  errors: errorReducer,
  notifications: notificationsReducers
})