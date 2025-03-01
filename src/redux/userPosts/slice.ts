import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PostsState } from './types';
import { fetchPostsAsync } from './thunk';

const initialState: PostsState = {
    posts: [],
    isLoading: false,
    isError: false,
};

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPostsAsync.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        });
        builder.addCase(fetchPostsAsync.fulfilled, (state, data) => {
            state.isLoading = false;
            state.isError = false;

            state.posts = [...state.posts, ...data.payload];
        });
        builder.addCase(fetchPostsAsync.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    },
});

export default postsSlice.reducer;
