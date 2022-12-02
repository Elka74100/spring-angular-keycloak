import { createSlice } from '@reduxjs/toolkit'

interface Token {
  value: string
}

const initialState: Token = {
  value: "",
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.value = action.payload
    },
  },
})

export const {setToken} = tokenSlice.actions

export default tokenSlice.reducer