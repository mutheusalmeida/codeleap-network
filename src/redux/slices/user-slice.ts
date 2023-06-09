import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserSliceType, UserType } from 'user'

const initialState: UserSliceType = {
  user: {
    username: undefined,
    isAuthenticated: false,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user.username = action.payload.username
      state.user.isAuthenticated = action.payload.isAuthenticated
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
