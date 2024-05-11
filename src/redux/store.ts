import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice'
import SessionReducer from './slices/Session/SessionSlice'
export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        session: SessionReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch