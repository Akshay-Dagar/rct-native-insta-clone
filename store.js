import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'

export default configureStore({
  reducer: {
    user: reducers.userReducer
  }
})