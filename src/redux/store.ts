import { configureStore } from '@reduxjs/toolkit'
import { bookingSlice } from './slices/booking/bookingSlice'; // Import the bookingSlice

export const store = configureStore({
  reducer: {
    booking: bookingSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch