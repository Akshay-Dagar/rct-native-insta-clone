import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './reducers'

export default configureStore({
  reducer: {
    user: reducers.userReducer,
    newsfeed: reducers.newsfeedReducer,
    posts: reducers.postsReducer,
    message: reducers.messageReducer,
    comments: reducers.commentsReducer,
    selectedUser: reducers.selectedUserReducer
  }
})