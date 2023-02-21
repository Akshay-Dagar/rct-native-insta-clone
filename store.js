import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'

export default configureStore({
  reducer: {
    user: reducers.userReducer,
    newsfeed: reducers.newsfeedReducer,
    posts: reducers.postsReducer,
    comments: reducers.commentsReducer,
    selectedUser: reducers.selectedUserReducer,
    background: reducers.backgroundReducer
  }
})