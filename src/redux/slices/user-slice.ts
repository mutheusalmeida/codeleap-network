import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      username: undefined,
      isAuthenticated: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user.username = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
