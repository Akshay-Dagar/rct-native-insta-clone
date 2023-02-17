import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null,
  type: null
}

export const messageSlice = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    setMessage: (state, action) => {
      state.value = action.payload.value
      state.type = action.payload.type
    },
    clearMessage: state => {
      state.value = null
      state.type = null
    }
  }
})

export const { setMessage, clearMessage } = messageSlice.actions
export default messageSlice.reducer