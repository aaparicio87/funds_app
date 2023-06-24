import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface IAuthState {
  isAuth: boolean
}

const initialState: IAuthState = {
  isAuth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true
    },
    logout: (state) => {
      state.isAuth = false
    },

  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions
export const selectAuth = (state: RootState) => state.auth  

export default authSlice.reducer