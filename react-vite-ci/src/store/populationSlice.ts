import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface PopulationState {
  population: number
}

// Define the initial state using that type
const initialState: PopulationState = {
  population: 10000000,
}

export const populationSlice = createSlice({
  name: 'population',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.population += 1
    },
    decrement: (state) => {
      state.population -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.population += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = populationSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectPopulation = (state: RootState) => state.population.value

export default populationSlice.reducer