import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { PostsState } from './types';
import {
    createPostAsync,
    editPost,
    fetchPostsAsync,
    removePost,
} from './thunk';

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
        clearError: (state) => {
            state.errorMessage = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.posts = [...state.posts, ...action.payload];
            })
            .addCase(createPostAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.posts.push(action.payload);
            })
            .addCase(editPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.posts = state.posts.map((post) =>
                    post.id === action.payload.id ? action.payload : post,
                );
            })
            .addCase(removePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.posts = state.posts.filter(
                    (post) => post.id !== action.payload.deletedPostId,
                );
            })
            .addMatcher(
                isPending(
                    fetchPostsAsync,
                    createPostAsync,
                    editPost,
                    removePost,
                ),
                (state) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.errorMessage = '';
                },
            )
            .addMatcher(
                isRejected(
                    fetchPostsAsync,
                    createPostAsync,
                    editPost,
                    removePost,
                ),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.errorMessage = action.payload as string;
                },
            );
    },
});

export const { resetPosts, clearError } = postsSlice.actions;
export default postsSlice.reducer;
