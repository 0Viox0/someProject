import { createSlice } from '@reduxjs/toolkit';
import { PostsState } from './types';
import { postsThunk } from './thunk';
import { build } from 'vite';

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isError: false,
    page: 0,
    limit: 20,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(postsThunk.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(postsThunk.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(postsThunk.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});
