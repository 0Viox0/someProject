import { createSlice, isPending, isRejected } from '@reduxjs/toolkit';
import { PostCommentsState } from './types';
import {
    createComment,
    deleteComment,
    editComment,
    fetchPost,
    fetchPostAuthor,
    fetchPostComments,
} from './thunk';

const initialState: PostCommentsState = {
    post: null,
    author: null,
    comments: [],
    isLoading: false,
    isError: false,
    errorMessage: '',
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.post = action.payload;
            })
            .addCase(fetchPostComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.comments = action.payload;
            })
            .addCase(fetchPostAuthor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';
                state.author = action.payload;
            })
            .addCase(deleteComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';

                state.comments = state.comments.filter(
                    (comment) => comment.id !== action.payload,
                );
            })
            .addCase(editComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';

                state.comments = state.comments.map((comment) =>
                    comment.id === action.payload.id ? action.payload : comment,
                );
            })
            .addCase(createComment.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.errorMessage = '';

                state.comments.push(action.payload);
            })
            .addMatcher(
                isPending(fetchPost, fetchPostComments, fetchPostAuthor),
                (state) => {
                    state.isLoading = true;
                    state.isError = false;
                    state.errorMessage = '';
                },
            )
            .addMatcher(
                isRejected(fetchPost, fetchPostComments, fetchPostAuthor),
                (state, action) => {
                    state.isLoading = false;
                    state.isError = true;
                    state.errorMessage = action.payload as string;
                },
            );
    },
});

export default postSlice.reducer;
