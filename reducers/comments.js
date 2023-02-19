import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    value: null
  },
  reducers: {
    setComments: (state, action) => {
      state.value = action.payload
    },
    addComment: (state, action) => {
      state.value = state.value ? [...state.value, action.payload] : [action.payload]
    }
  }
})

// Action creators are generated for each case reducer function
export const { setComments, addComment } = commentsSlice.actions
export default commentsSlice.reducer