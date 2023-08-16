import { configureStore } from "@reduxjs/toolkit";
import counterReducers from './features/counter/counterSlice'

const store = configureStore({
    reducer: {
        counter:counterReducers,
    },
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;