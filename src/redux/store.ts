import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users/slice';
import postReducer from './userPosts/slice';

export const store = configureStore({
    reducer: {
        users: userReducer,
        posts: postReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
