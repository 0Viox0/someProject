import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/utils/axiosInstance';
import { Post } from './types';
import { User } from '@redux/users/types';

export interface FetchPostsParams {
    page?: number;
    limit?: number;
    title?: string;
    author?: string;
}

export const fetchPostsAsync = createAsyncThunk(
    'fetchPosts',
    async ({ page, limit, title = '', author = '' }: FetchPostsParams) => {
        try {
            const response = await axiosInstance.get<Post[]>(
                `/posts?_page=${page}&_limit=${limit}`,
            );

            const userResponse = await axiosInstance.get<User[]>('/users');

            const getUserById = (id: number) => {
                return userResponse.data.find((user) => user.id === id)
                    .username;
            };

            const posts = response.data.map((post) => ({
                ...post,
                author: `By @${getUserById(post.userId)}`,
            }));

            return posts.filter(
                (post) =>
                    post.title
                        .toLocaleLowerCase()
                        .includes(title.toLocaleLowerCase()) &&
                    post.author
                        .toLocaleLowerCase()
                        .includes(author.toLocaleLowerCase()),
            );
        } catch (err) {
            console.log(err);
            throw Error('there was an error fetching post');
        }
    },
);
