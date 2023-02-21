import { createSlice } from '@reduxjs/toolkit'

export const backgroundSlice = createSlice({
  name: 'background',
  initialState: {
    value: require('../assets/background.jpg')
  },
  reducers: {
    setBackground: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setBackground } = backgroundSlice.actions
export default backgroundSlice.reducer