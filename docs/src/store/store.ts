import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dummyApi } from './api/getApi'
import usersReducer from './usersSlice'

export const store = configureStore({
  reducer: {
  [dummyApi.reducerPath]: dummyApi.reducer,
    users: usersReducer
  },

  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(dummyApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch