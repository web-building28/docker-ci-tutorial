import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dummyApi } from './api/getApi'
import populationReducer from './populationSlice'
import usageReducer from './usageSlice'
import usersReducer from './usersSlice'

export const store = configureStore({
  reducer: {
  [dummyApi.reducerPath]: dummyApi.reducer,
    population: populationReducer,
    usage: usageReducer,
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) =>
     getDefaultMiddleware().concat(dummyApi.middleware)
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch