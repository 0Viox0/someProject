import { configureStore } from '@reduxjs/toolkit';
import { commentReducer } from 'modules/comment';
import { postsReducer } from 'modules/posts';
import { userReducer } from 'modules/user';

export const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postsReducer,
        comments: commentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
