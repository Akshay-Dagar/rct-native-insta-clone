import { createSlice } from '@reduxjs/toolkit'

export const newsfeedSlice = createSlice({
  name: 'newsfeed',
  initialState: {
    value: null
  },
  reducers: {
    setNewsFeed: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setNewsFeed } = newsfeedSlice.actions
export default newsfeedSlice.reducer