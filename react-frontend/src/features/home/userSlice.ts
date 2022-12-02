import { createSlice } from '@reduxjs/toolkit'
import KeycloakService from '../../services/keycloakService'

interface User {
  name: string
}

const initialState: User = {
  name: "",
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state) => {
      state.name = ""
    },
  },
})

export const {setUsername} = userSlice.actions

export default userSlice.reducer