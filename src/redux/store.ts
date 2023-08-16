import { configureStore } from "@reduxjs/toolkit";
import counterReducers from './features/counter/counterSlice';
import logger from "./middlewares/logger";

const store = configureStore({
    reducer: {
        counter:counterReducers,
    },
    devTools:true,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
}
);

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;