import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice'
import userReducer from './slices/UserSlice'
export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        user: userReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch