import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/utils/axiosInstance';
import { Post } from './types';

export const fetchPostsAsync = createAsyncThunk(
    'fetchPosts',
    async ({ page, limit }: { page: number; limit: number }) => {
        const response = await axiosInstance.get<Post[]>(
            `/posts?_page=${page}&_limit=${limit}`,
        );

        return response.data;
    },
);
