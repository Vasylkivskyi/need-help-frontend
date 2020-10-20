import { combineReducers } from 'redux';
import { counterReducer, timerReducer } from './Counter/counterReducers'

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

export default combineReducers(reducers)
