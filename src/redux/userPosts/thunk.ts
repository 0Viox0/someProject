import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/api/axiosInstance';
import {
    FetchPostsParams,
    Post,
    PostCreateResponseType,
    PostCreationDto,
    PostEditDto,
} from './types';
import { User } from '@redux/users/types';

export const fetchPostsAsync = createAsyncThunk(
    'fetchPosts',
    async ({ page, limit, title = '', userId = '' }: FetchPostsParams) => {
        try {
            let fetchUrl = `/posts?_limit=${limit}&_page=${page}`;

            if (userId) {
                fetchUrl += `&userId=${userId}`;
            }

            if (title) {
                fetchUrl += `&title_like=${title}`;
            }

            const response = await axiosInstance.get<Post[]>(fetchUrl);

            const userResponse = await axiosInstance.get<User[]>('/users');

            const getUsernameById = (userId: number) =>
                userResponse.data.find((user) => user.id === userId).username;

            return response.data.map((post) => ({
                ...post,
                author: `${getUsernameById(post.userId)}`,
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

            const postResponse =
                await axiosInstance.post<PostCreateResponseType>('/posts', {
                    title: post.title,
                    body: post.body,
                    userId: postAuthor.id,
                });

            if (postResponse.status < 200 || postResponse.status >= 300) {
                return rejectWithValue(
                    'post was not created, something went wrong',
                );
            }

            const returnResponse: Post = {
                id: postResponse.data.id,
                author: post.writtenBy,
                body: postResponse.data.body,
                title: postResponse.data.title,
                userId: postResponse.data.userId,
            };

            return returnResponse;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

export const editPost = createAsyncThunk(
    'posts/editPost',
    async (postEditDto: PostEditDto, { rejectWithValue }) => {
        try {
            const user = await axiosInstance.get<User>(
                `users/${postEditDto.newPost.userId}`,
            );

            if (user.data.username !== postEditDto.newPost.author) {
                return rejectWithValue(
                    `user with name ${postEditDto.newPost.author} doesn't exist`,
                );
            }

            const response = await axiosInstance.put<Post>(
                `posts/${postEditDto.postToChangeId}`,
                postEditDto.newPost,
            );

            return response.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    },
);

export const removePost = createAsyncThunk(
    'posts/removePost',
    async (postId: number) => {
        await axiosInstance.delete(`posts/${postId}`);

        return { deletedPostId: postId };
    },
);
