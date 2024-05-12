import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slices/AuthSlice'
import SessionReducer from './slices/Session/SessionSlice'
import ClassesReducer from './slices/Classes/ClassesSlice'
import ClassGetByIdReducer from './slices/Classes/ClassGetByIdSlice'
export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        session: SessionReducer,
        classes: ClassesReducer,
        classDetail: ClassGetByIdReducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch