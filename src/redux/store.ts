import { configureStore } from '@reduxjs/toolkit';
import { postReducer, postsReducer } from 'modules/posts';
import { userReducer } from 'modules/user';

export const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postsReducer,
        post: postReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
