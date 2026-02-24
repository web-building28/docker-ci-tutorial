import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Slice example not being used yet
interface UsersState {
  value: number,
}

const initialState: UsersState = {
  value: 0,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  }
})

export const { increment, decrement, incrementByAmount } = usersSlice.actions
export const selectUsers = (state: RootState) => state.users.value

export default usersSlice.reducer