import { createSlice } from '@reduxjs/toolkit'

export const selectedUserSlice = createSlice({
  name: 'selectedUser',
  initialState: {
    value: null
  },
  reducers: {
    setSelectedUser: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setSelectedUser } = selectedUserSlice.actions
export default selectedUserSlice.reducer