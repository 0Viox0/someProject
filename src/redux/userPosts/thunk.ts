import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/utils/axiosInstance';
import { FetchPostsParams, Post, PostCreationDto } from './types';
import { User } from '@redux/users/types';

export const fetchPostsAsync = createAsyncThunk(
    'fetchPosts',
    async ({ page, limit, title = '', userId = '' }: FetchPostsParams) => {
        try {
            const response = await axiosInstance.get<Post[]>(
                `/posts?_limit=${limit}&_page=${page}&title_like=${title}&userId=${userId}`,
            );

            const userResponse = await axiosInstance.get<User[]>('/users');

            const getUsernameById = (userId: number) =>
                userResponse.data.find((user) => user.id === userId).username;

            return response.data.map((post) => ({
                ...post,
                author: `By @${getUsernameById(post.userId)}`,
            }));
        } catch {
            throw new Error('could not fetch posts');
        }
    },
);

export const createPostAsync = createAsyncThunk(
    'createPost',
    async (post: PostCreationDto, { rejectWithValue }) => {
        try {
            const userResponse = await axiosInstance.get<User[]>('/users');

            const postAuthor = userResponse.data.find(
                (user) => user.username === post.writtenBy,
            );

            if (!postAuthor) {
                return rejectWithValue('this username does not exist');
            }

            const postResponse = await axiosInstance.post('/posts', {
                title: post.title,
                body: post.body,
                userId: postAuthor.id,
            });

            if (postResponse.status < 200 || postResponse.status >= 300) {
                return rejectWithValue(
                    'post was not created, something went wrong',
                );
            }

            return postResponse.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);
