import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UserSliceType = {
  user: {
    username: undefined | string
    isAuthenticated: boolean
  }
}

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
    setUser: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
