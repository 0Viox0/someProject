import { Post } from '@redux/userPosts/types';
import { User } from '@redux/users/types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/api/axiosInstance';
import { Comment, CommentCreationDto } from './types';

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async (postId: number, { rejectWithValue }) => {
        const response = await axiosInstance.get<Post>(`posts/${postId}`);

        if (Object.keys(response.data).length === 0) {
            return rejectWithValue(`the post with id ${postId} was not found`);
        }

        return response.data;
    },
);

export const fetchPostComments = createAsyncThunk(
    'post/fetchComments',
    async (postId: number, { rejectWithValue }) => {
        const response = await axiosInstance.get<Comment[]>(
            `posts/${postId}/comments`,
        );

        if (response.data.length === 0) {
            return rejectWithValue(
                `comments for post with id ${postId} were not found`,
            );
        }

        return response.data;
    },
);

export const fetchPostAuthor = createAsyncThunk(
    'post/fetchPostUser',
    async (userId: number, { rejectWithValue }) => {
        const response = await axiosInstance.get<User>(`users/${userId}`);

        if (Object.keys(response.data).length === 0) {
            return rejectWithValue(`user with id ${userId} was not found`);
        }

        return response.data;
    },
);

export const deleteComment = createAsyncThunk(
    'post/removeComment',
    async (commentId: number) => {
        await axiosInstance.delete(`comments/${commentId}`);

        return commentId;
    },
);

export type CommentEditDto = {
    commentIdToChange: number;
    newComment: Comment;
};

export const editComment = createAsyncThunk<Comment, CommentEditDto>(
    'post/editComment',
    async ({ commentIdToChange, newComment }) => {
        await axiosInstance.put(`comments/${commentIdToChange}`, newComment);

        newComment.id = commentIdToChange;

        return newComment;
    },
);

export const createComment = createAsyncThunk(
    'post/createComment',
    async (commentCreationDto: CommentCreationDto) => {
        const response = await axiosInstance.post<Comment>(
            `comments`,
            commentCreationDto,
        );

        return response.data;
    },
);
