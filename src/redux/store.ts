import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/slice';
import postsReducer from './userPosts/slice';
import postReducer from './post/slice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postsReducer,
        post: postReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
