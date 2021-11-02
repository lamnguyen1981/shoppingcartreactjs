import { combineReducers } from '@reduxjs/toolkit'

import catagoryReducer from './slice/catalogSlice'
import counterReducer from './features/counter/counterSlice'


const rootReducer = combineReducers({
  catagoryReducer: catagoryReducer,
  counter: counterReducer
 
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
