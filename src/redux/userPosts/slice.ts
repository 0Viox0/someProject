import {
    createSlice,
    isFulfilled,
    isPending,
    isRejected,
} from '@reduxjs/toolkit';
import { PostsState } from './types';
import { createPostAsync, fetchPostsAsync } from './thunk';

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        resetPosts: (state) => {
            state.posts = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.posts = [...state.posts, ...action.payload];
            })
            .addCase(createPostAsync.fulfilled, (state, action) => {
                state.posts.push(action.payload);
            })
            .addMatcher(
                isPending(fetchPostsAsync, createPostAsync),
                (state) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.errorMessage = '';
                },
            )
            .addMatcher(
                isRejected(fetchPostsAsync, createPostAsync),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.errorMessage = action.payload as string;
                },
            )
            .addMatcher(
                isFulfilled(fetchPostsAsync, createPostAsync),
                (state) => {
                    state.isLoading = false;
                    state.isError = false;
                    state.errorMessage = '';
                },
            );
    },
});

export const { resetPosts } = postsSlice.actions;
export default postsSlice.reducer;
