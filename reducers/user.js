import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
    loading: false
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
      state.loading = false
    },
    userFetchStart: (state, _) => {
      state.loading = true
    },
    userFetchEnd: (state, _) => {
      state.loading = false
    }
  }
})

export const { setUser, userFetchEnd, userFetchStart } = userSlice.actions
export default userSlice.reducer